import "hono";
import type { AuthUser } from "@hono/auth-js";

type Head = {
  title?: string;
};

declare module "hono" {
  interface Env {
    Variables: {};
    Bindings: {};
  }
  interface ContextVariableMap {
    authUser?: AuthUser | null | undefined;
  }

  interface ContextRenderer {
    (content: string | Promise<string>, head?: Head):
      | Response
      | Promise<Response>;
  }
}
