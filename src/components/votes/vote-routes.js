import Router from "@koa/router";
import * as VoteController from "../votes/vote-controller.js";

const votes = new Router();

votes.get("/leaderboard", VoteController.getLeaderboard);

export default votes;
