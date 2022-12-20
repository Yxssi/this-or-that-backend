import mongoose from "mongoose";

mongoose
  .connect(
    `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.gv9rz8r.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("✅ Successfully connected to the database"))
  .catch((e) => console.log(`⛔️ Error during database connection ${e}`));
