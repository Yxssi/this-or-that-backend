import Choice from "#components/choice/choice-model.js";

export async function index(ctx) {
  try {
    const choices = await Choice.find({});
    ctx.ok(choices);
  } catch (e) {
    ctx.badRequest({ message: e.message });
  }
}
