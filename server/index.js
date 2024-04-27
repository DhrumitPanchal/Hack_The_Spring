const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserRouter = require("./routes/userRoute");
const WorkRouter = require("./routes/workRouter");
const ContactRouter = require("./routes/contactRoute");
const cloudinary = require("cloudinary").v2;

require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/auth", UserRouter);
app.use("/work", WorkRouter);
app.use("/contact", ContactRouter);
app.get("/", (req, res) => {
  res.send("api is ruing...");
});
const mongoDBURL = process.env.MONGODBURL;
const PORT = process.env.PORT;
try {
  app.listen(PORT, () => console.log("Server is running on : " + PORT));
  mongoose.connect(mongoDBURL).then(() => console.log("mongoDB connected "));
} catch (error) {
  console.log(error);
}
