import User from "#components/user/user-model.js";
import Choice from "#components/choice/choice-model.js";
import Joi from "joi";

export async function index(ctx) {
  try {
    const users = await User.find({});
    ctx.ok(users);
  } catch (e) {
    ctx.badRequest({ message: e.message });
  }
}

export async function create(ctx) {
  try {
    const userValidationSchema = Joi.object({
      username: Joi.string().required(),
    });
    const { error, value } = userValidationSchema.validate(ctx.request.body);
    if (error) throw new Error(error);
    const user = await User.create(value);
    ctx.ok(user);
  } catch (e) {
    ctx.badRequest({ message: e.message });
  }
}

export async function update(ctx) {
  try {
    const userValidationSchema = Joi.object({
      title: Joi.string().required(),
      favorite: Joi.boolean(),
      description: Joi.string(),
    });
    const { error, value } = userValidationSchema.validate(ctx.request.body);
    if (error) throw new Error(error);

    const user = await User.findByIdAndUpdate(ctx.params.id, value, {
      runValidators: true,
      new: true,
    });
    ctx.ok(user);
  } catch (e) {
    ctx.badRequest({ message: e.message });
  }
}

export async function del(ctx) {
  try {
    await User.findByIdAndDelete(ctx.params.id);
    ctx.ok();
  } catch (error) {
    ctx.badRequest({ message: e.message });
  }
}

// wip :
export async function saveChoice(ctx) {
  try {
    const user = await User.findById(ctx.params.id);
    const choice = ctx.params.choiceTitle;
    const choiceId = ctx.body;
    if (user) {
      user.choices.push(choice);
      await user.save();
      ctx.ok(user);
    } else {
      ctx.badRequest({
        message: choiceId,
      });
    }
  } catch (error) {
    ctx.badRequest({ message: error.message });
  }
}
