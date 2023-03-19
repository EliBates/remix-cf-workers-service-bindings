import { createEventHandler } from "@remix-run/cloudflare-workers";
import * as build from "@remix-run/dev/server-build";

declare global {
  const GATEWAY_SERVICE: Fetcher;
}

interface Env {
  GATEWAY_SERVICE: Fetcher;
}

declare module "@remix-run/server-runtime" {
  interface AppLoadContext extends Env {}
}

addEventListener(
  "fetch",
  createEventHandler({ 
    build, 
    mode: process.env.NODE_ENV,   
    getLoadContext: (event: FetchEvent) => {
      return {
        event,
        GATEWAY_SERVICE: GATEWAY_SERVICE,
      }
    }, 
  })
);
