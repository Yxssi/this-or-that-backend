import Router from "@koa/router";

import userRoutes from "#components/user/user-routes.js";

const API_V1_ROUTER = new Router({ prefix: "/api/v1" });

API_V1_ROUTER.use("/user", userRoutes.routes(), userRoutes.allowedMethods());

export { API_V1_ROUTER };
