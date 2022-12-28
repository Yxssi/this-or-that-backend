import Router from "@koa/router";
import * as UserControllers from "#components/user/user-controllers.js";

const users = new Router();

users.get("/", UserControllers.index);
// users.get("/:id", UserControllers.id)
users.post("/", UserControllers.create);
users.put("/:id", UserControllers.update);
users.del("/:id", UserControllers.del);

users.post("/choice/:choiceTitle", UserControllers.saveChoice);

export default users;
