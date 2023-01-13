import Vote from "./vote-model.js";

export async function index(ctx) {
  try {
    const votes = await Vote.find({ title: ctx.params.name });
    ctx.ok(votes);
  } catch (e) {
    ctx.badRequest({ message: e.message });
  }
}

export async function getLeaderboard(ctx) {
  try {
    const votes = await Vote.find({}).sort({ count: -1 });
    ctx.ok(votes);
  } catch (e) {
    ctx.badRequest({ message: e.message });
  }
}

export async function addNewChoice(choice) {
  const vote = new Vote({
    title: choice.first_choice_title,
    count: 0,
  });
  vote.save();
}

export async function updateVoteCount(selectedChoice) {
  try {
    const vote = await Vote.findOne({
      title: selectedChoice,
    });
    if (vote) {
      vote.count += 1;
      vote.save();
    }
  } catch (e) {
    console.log(e);
  }
}
