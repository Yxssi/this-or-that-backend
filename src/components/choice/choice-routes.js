import Router from "@koa/router";
import * as ChoiceControllers from "#components/choice/choice-controller.js";

const choices = new Router();

choices.get("/", ChoiceControllers.index);
choices.get("/:id", ChoiceControllers.id);
choices.post("/", ChoiceControllers.create);
choices.put("/:id", ChoiceControllers.update);
choices.del("/:id", ChoiceControllers.del);

export default choices;
