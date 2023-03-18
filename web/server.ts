import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "@remix-run/dev/server-build";

interface Env {
  GATEWAY_SERVICE: Fetcher;
}

type Context = EventContext<Env, string, unknown>;

declare module "@remix-run/server-runtime" {
  interface AppLoadContext extends Env {}
}

const handleRequest = createPagesFunctionHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (context: Context) => ({
    GATEWAY_SERVICE: context.env.GATEWAY_SERVICE,
  }),
});

export function onRequest(context: Context) {
  return handleRequest(context);
}
