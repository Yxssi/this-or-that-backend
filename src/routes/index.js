import Router from "@koa/router";

import userRoutes from "../components/user/user-routes.js";
import choiceRoutes from "../components/choice/choice-routes.js";
import votesRoutes from "../components/votes/vote-routes.js";

const API_V1_ROUTER = new Router({ prefix: "/api/v1" });

API_V1_ROUTER.use("/user", userRoutes.routes(), userRoutes.allowedMethods());
API_V1_ROUTER.use(
  "/choices",
  choiceRoutes.routes(),
  choiceRoutes.allowedMethods()
);
API_V1_ROUTER.use("/votes", votesRoutes.routes(), votesRoutes.allowedMethods());

export { API_V1_ROUTER };
