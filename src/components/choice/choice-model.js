import mongoose from "mongoose";

const { Schema } = mongoose;

const choiceSchema = new Schema({
  first_choice_image_url: {
    type: String,
    required: true,
  },
  second_choice_image_url: {
    type: String,
    required: true,
  },
  first_choice_title: {
    type: String,
    required: true,
  },
  second_choice_title: {
    type: String,
    required: true,
  },
});

const Choice = mongoose.model("Choice", choiceSchema);

export default Choice;
