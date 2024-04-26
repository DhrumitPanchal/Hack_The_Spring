const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserRouter = require("./routes/userRoute");
const WorkRouter = require("./routes/workRouter");
const ContactRouter = require("./routes/contactRoute");
const upload = require("./middleware/multer");
const { handleUpload } = require("./cloudinary");
require("dotenv").config();
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
