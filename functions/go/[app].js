import { APPS, storeUrl } from "./store.js";

export function onRequest(context) {
  const app = APPS[context.params.app];
  if (!app) return new Response("Not found", { status: 404 });
  const country = context.request.cf && context.request.cf.country;
  return new Response(null, {
    status: 302,
    headers: {
      Location: storeUrl(app, country),
      "Cache-Control": "private, no-store",
      Vary: "CF-IPCountry",
    },
  });
}
