import * as mongoose from "mongoose";
import { env } from "@/env";

export async function connect() {
  try {
    await mongoose.connect(env.DATABASE_URL!);
    const connection = mongoose.connection;

    connection.on("connect", () => {
      console.log("Connected to database!");
    });

    connection.on("error", (err) => {
      console.log("Connection to database failed!", err);

      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong!");
    console.log(error);
  }
}
