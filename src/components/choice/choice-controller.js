import Choice from "#components/choice/choice-model.js";

const choiceValidationSchema = Joi.object({
  first_choice_image_url: Joi.string().required(),
  second_choice_image_url: Joi.string().required(),
  first_choice_title: Joi.string().required(),
  second_choice_title: Joi.string().required(),
});

export async function index(ctx) {
  try {
    const choices = await Choice.find({});
    ctx.ok(choices);
  } catch (e) {
    ctx.badRequest({ message: e.message });
  }
}

export async function create(ctx) {
  try {
    const { error, value } = choiceValidationSchema.validate(ctx.request.body);
    if (error) throw new Error(error);
    const choice = await Choice.create(value);
    ctx.ok(choice);
  } catch (e) {
    ctx.badRequest({ message: e.message });
  }
}

export async function update(ctx) {
  try {
    const { error, value } = choiceValidationSchema.validate(ctx.request.body);
    if (error) throw new Error(error);

    const choice = await Choice.findByIdAndUpdate(ctx.params.id, value, {
      runValidators: true,
      new: true,
    });
    ctx.ok(choice);
  } catch (e) {
    ctx.badRequest({ message: e.message });
  }
}

export async function del(ctx) {
  try {
    await Choice.findByIdAndDelete(ctx.params.id);
    ctx.ok();
  } catch (error) {
    ctx.badRequest({ message: e.message });
  }
}
