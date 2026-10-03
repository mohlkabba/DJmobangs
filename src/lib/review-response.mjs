// All destinations are maintained by the repository owner, never by query parameters.
export function reviewResponse(type, id, destinations) {
  const headers = { "Cache-Control": "no-store, max-age=0", "X-Robots-Tag": "noindex, nofollow" };
  const key = type + "/" + id;
  if (!["s", "p"].includes(type) || !/^(00[1-9]|0[1-9][0-9]|100)$/.test(id) ||
      !Object.hasOwn(destinations, key)) {
    return new Response("Unknown review card.", { status: 404, headers });
  }
  const target = destinations[key];
  if (target === null) {
    return new Response("This Tapin2Review card has not been activated yet. Please contact the business that supplied it.", {
      status: 200, headers: { ...headers, "Content-Type": "text/plain; charset=utf-8" }
    });
  }
  try {
    const url = new URL(target);
    const permitted = ["g.page", "search.google.com", "maps.google.com", "www.google.com", "google.com", "maps.app.goo.gl"];
    if (typeof target !== "string" || url.protocol !== "https:" || !permitted.includes(url.hostname) ||
        url.username || url.password || url.port) throw new Error("Invalid destination");
    // google.com hosts also serve redirectors (/url, /amp) that forward to any site; allow only Maps, Search and review paths.
    if (url.hostname.endsWith("google.com") && !["", "maps", "search", "local"].includes(url.pathname.split("/")[1])) {
      throw new Error("Invalid destination");
    }
    return new Response(null, { status: 302, headers: { ...headers, Location: url.href } });
  } catch {
    return new Response("This review link is temporarily unavailable. Please ask the business for its Google review link.", {
      status: 503, headers
    });
  }
}
