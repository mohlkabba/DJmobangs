import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { reviewResponse } from "../src/lib/review-response.mjs";
const data = JSON.parse(readFileSync(new URL("../src/data/review-destinations.json", import.meta.url)));
const printed = ["s","p"].flatMap((type) => Array.from({length:100}, (_,i) => type + "/" + String(i+1).padStart(3,"0")));
// Behaviour tests run against an all-unassigned copy so they keep passing once real units are activated.
const blank = Object.fromEntries(printed.map((key) => [key,null]));
test("the configuration lists exactly the 200 printed addresses", () => {
  assert.deepEqual(Object.keys(data).sort(), [...printed].sort());
});
test("every configured unit is either unassigned or has a destination that redirects", async () => {
  for (const [key, value] of Object.entries(data)) {
    const [type,id] = key.split("/");
    const response = reviewResponse(type,id,data);
    if (value === null) {
      assert.equal(response.status,200,key);
      assert.match(await response.text(), /not been activated/);
    } else {
      assert.equal(response.status,302,key + " has a destination that would be rejected: " + JSON.stringify(value));
    }
  }
});
test("all 200 printed addresses are recognized when unassigned", async () => {
  for (const key of printed) {
    const [type,id] = key.split("/");
    const response = reviewResponse(type,id,blank);
    assert.equal(response.status,200,key);
    assert.match(response.headers.get("cache-control"),/no-store/);
    assert.match(await response.text(), /not been activated/);
  }
});
test("invalid IDs do not redirect", () => {
  const assigned = Object.fromEntries(printed.map((key) => [key,"https://g.page/r/example/review"]));
  for (const type of ["s","p"])
    for (const id of ["000","101","1","01","0001","1000","001x","x001","001\n"," 001","-01","","__proto__","constructor"])
      assert.equal(reviewResponse(type,id,assigned).status,404,type + "/" + JSON.stringify(id));
  for (const type of ["x","S","P","","sp","__proto__"])
    assert.equal(reviewResponse(type,"001",assigned).status,404,JSON.stringify(type));
});
test("assigned destinations redirect temporarily and can change", () => {
  for (const target of ["https://g.page/r/example/review","https://search.google.com/local/writereview?placeid=example",
      "https://www.google.com/maps/place/Example","https://www.google.com/search?q=example","https://maps.google.com/?cid=1",
      "https://maps.app.goo.gl/example"]) {
    const res = reviewResponse("s","001",{...blank,"s/001":target});
    assert.equal(res.status,302,target);
    assert.equal(res.headers.get("location"),target);
    assert.match(res.headers.get("cache-control"),/no-store/);
  }
});
test("one unit's assignment does not affect any other unit", () => {
  const assigned = {...blank,"s/001":"https://g.page/r/example/review"};
  for (const key of printed.filter((key) => key !== "s/001")) {
    const [type,id] = key.split("/");
    assert.equal(reviewResponse(type,id,assigned).status,200,key);
  }
  const both = {...assigned,"p/001":"https://g.page/r/other/review"};
  assert.equal(reviewResponse("s","001",both).headers.get("location"),"https://g.page/r/example/review");
  assert.equal(reviewResponse("p","001",both).headers.get("location"),"https://g.page/r/other/review");
});
test("malformed or unapproved destinations fail closed", () => {
  for (const target of ["javascript:alert(1)","http://g.page/a","https://g.page.evil.com/a","https://user:pass@g.page/a","https://g.page:8443/a",
      "https://evil.com/?next=https://g.page/a","//g.page/a","/local/path","data:text/html,x","",{},["https://g.page/a"],123,true]) {
    const res = reviewResponse("s","001",{...blank,"s/001":target});
    assert.equal(res.status,503,JSON.stringify(target));
    assert.equal(res.headers.get("location"),null);
  }
});
test("Google redirector paths that forward to other sites are rejected", () => {
  for (const target of ["https://www.google.com/url?q=https://evil.com","https://google.com/url?q=https://evil.com",
      "https://www.google.com/amp/s/evil.com","https://www.google.com/maps/../url?q=https://evil.com",
      "https://maps.google.com/url?q=https://evil.com","https://search.google.com/url?q=https://evil.com"])
    assert.equal(reviewResponse("s","001",{...blank,"s/001":target}).status,503,target);
});
