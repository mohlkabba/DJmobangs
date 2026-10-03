import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { reviewResponse } from "../src/lib/review-response.mjs";
const data = JSON.parse(readFileSync(new URL("../src/data/review-destinations.json", import.meta.url)));
test("all 200 printed addresses are recognized and initially unassigned", async () => {
  assert.equal(Object.keys(data).length, 200);
  for (const [key, value] of Object.entries(data)) {
    assert.equal(value, null);
    const [type,id] = key.split("/");
    const response = reviewResponse(type,id,data);
    assert.equal(response.status,200);
    assert.match(await response.text(), /not been activated/);
  }
});
test("invalid IDs do not redirect", () => {
  for (const id of ["000","101","1","01","001x","__proto__"])
    assert.equal(reviewResponse("s",id,data).status,404);
});
test("assigned destinations redirect temporarily and can change", () => {
  for (const target of ["https://g.page/r/example/review","https://search.google.com/local/writereview?placeid=example"]) {
    const res = reviewResponse("s","001",{...data,"s/001":target});
    assert.equal(res.status,302);
    assert.equal(res.headers.get("location"),target);
    assert.match(res.headers.get("cache-control"),/no-store/);
  }
  assert.equal(reviewResponse("p","001",{...data,"s/001":"https://g.page/r/example/review"}).status,200);
});
test("malformed or unapproved destinations fail closed", () => {
  for (const target of ["javascript:alert(1)","http://g.page/a","https://g.page.evil.com/a","https://user:pass@g.page/a","https://g.page:8443/a","",{}])
    assert.equal(reviewResponse("s","001",{...data,"s/001":target}).status,503);
});
