const express = require("express");
const {
  getAllUsers,
  handleUserRegister,
  handleUserLogin,
  handelJwtTokenBasedLogin,
  handelAdminAccess,
  handelUpdateUserDetails,
  handelUpload,
} = require("../controllers/Auth");
const upload = require("../middleware/multer");
const Router = express.Router();
Router.get("/", (req, res) => {
  res.send("api running fine");
});

Router.get("/auth", (req, res) => {
  res.json({ msg: "working" });
});
Router.post("/register", handleUserRegister);
Router.post("/upload", upload.single("profilePic"), handelUpload);
Router.post("/login", handleUserLogin);
Router.put("/update", handelUpdateUserDetails);
Router.get("/getallusers", getAllUsers);
Router.post("/adminlogin", handelAdminAccess);
Router.post("/jwtlogin", handelJwtTokenBasedLogin);

module.exports = Router;
