import Router from "@koa/router";

import userRoutes from "#components/user/user-routes.js";
import choiceRoutes from "#components/choice/choice-routes.js";

const API_V1_ROUTER = new Router({ prefix: "/api/v1" });

API_V1_ROUTER.use("/user", userRoutes.routes(), userRoutes.allowedMethods());
API_V1_ROUTER.use(
  "/choice",
  choiceRoutes.routes(),
  choiceRoutes.allowedMethods()
);

export { API_V1_ROUTER };
