import { Router, Context } from "https://deno.land/x/oak@v5.0.0/mod.ts";

import * as authRoutes from "./auth.routes.ts";
import * as userRoutes from "./user.routes.ts";

const router: Router = new Router();

router.get("", (ctx: Context) => {
  ctx.response.body = "hello world";
});

router
  .post("/register", ...authRoutes.register);

router
  .get("/users", userRoutes.getUsers)
  .get("/users/:id", userRoutes.getUserById)
  .post("/users", ...userRoutes.createUser)
  .put("/users/:id", ...userRoutes.updateUser)
  .delete("/users/:id", userRoutes.deleteUser);

export { router };
