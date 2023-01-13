import mongoose from "mongoose";

const { Schema } = mongoose;

const voteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

const Vote = mongoose.model("Vote", voteSchema);

export default Vote;
