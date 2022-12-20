import User from "#components/user/user-model.js";
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
