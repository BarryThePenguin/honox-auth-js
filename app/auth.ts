import type { Env } from "hono";
import { createMiddleware } from "hono/factory";
import { getAuthUser, initAuthConfig } from "@hono/auth-js";
import GitHub from "@auth/core/providers/github";

export { authHandler, getAuthUser, verifyAuth } from "@hono/auth-js";

export const auth = initAuthConfig(() => ({
  providers: [GitHub],
}));

export const session = createMiddleware<Env>(async (c, next) => {
  const authUser = await getAuthUser(c);
  if (authUser) {
    c.set("authUser", authUser);
  }
  return next();
});
