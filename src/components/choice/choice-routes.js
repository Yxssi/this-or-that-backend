import Router from "@koa/router";
import * as ChoiceControllers from "#components/choice/choice-controller.js";

const choices = new Router();

choices.get("/", ChoiceControllers.index);
choices.get("/:id", ChoicesControllers.id);
choices.post("/", ChoicesControllers.create);
choices.put("/:id", ChoicesControllers.update);
choices.del("/:id", ChoicesControllers.del);

export default choices;
