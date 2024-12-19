import cros from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

// Import routes
import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";

const app = express();

dotenv.config();
app.use(cros());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.error("Failed to connect to MongoDB");
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", userRoute);
app.use("/book", bookRoute);

app.listen(process.env.PORT || 4002, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
