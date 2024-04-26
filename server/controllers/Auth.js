const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { handleUpload } = require("../cloudinary");
async function getAllUsers(req, res) {
  try {
    const allUsers = await User.find();

    res.status(201).json({ msg: "user register successfully", allUsers });
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error" });
  }
}

async function handleUserRegister(req, res) {
  const { name, email, password, role, profilePic } = req.body;

  if (!name || !email || !password || !role || !profilePic) {
    return res.status(404).json({ msg: "all details are required" });
  }
  const user = await User.findOne({ email });
  if (user) return res.status(400).json({ msg: "user already exist" });
  const HashPassword = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({
      name,
      email,
      profilePic,
      role,
      password: HashPassword,
    });
    const Payload = {
      ...user,
    };
    const token = await jwt.sign(Payload, process.env.jwtSecretKey);
    const newObject = {
      access_Token: token,
      msg: "register successfully",
      user: user,
    };
    res.status(200).json(newObject);
  } catch (error) {
    return res.status(500).json({ error, msg: "Internal server error" });
  }
}

async function handelUpload(req, res) {
  try {
    const b64 = Buffer.from(req?.file?.buffer).toString("base64");
    let dataURI = "data:" + req?.file?.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(dataURI);
    res.status(200).json({ ProfilePicUrl: cldRes.url });
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error" });
  }
}
async function handleUserLogin(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "email and password are required" });
    }
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "user not Found" });

    const checkPassword = await bcrypt.compare(password, user.password);
    if (checkPassword) {
      const Payload = {
        ...user,
      };
      const token = await jwt.sign(Payload, process.env.jwtSecretKey);
      const newObject = {
        access_Token: token,
        msg: "login successfully",
        user: user,
      };
      res.status(200).json(newObject);
    } else {
      res.status(401).json({ msg: "invalid credentials" });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error" });
  }
}

async function handelJwtTokenBasedLogin(req, res) {
  const { access_Token } = req.body;
  try {
    if (access_Token) {
      const result = await jwt.verify(access_Token, process.env.jwtSecretKey);
      if (result) {
        const user = await User.findById(result._doc._id);
        return res
          .status(200)
          .json({ msg: "successfully login with jwt", user: user });
      } else {
        return res.status(403).json({ msg: "Internal token" });
      }
    }
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error" });
  }
}

async function handelUpdateUserDetails(req, res) {
  const { id, details } = req.body;
  if (!id || !details) {
    return res.status(404).json({ msg: "user details are required" });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(id, details);
    return res
      .status(200)
      .json({ msg: "user updated successfully", user: updatedUser });
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error" });
  }
}

async function handelAdminAccess(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({ msg: "email and password are required" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ msg: "incorrect credential" });
    }

    if (user.userRole === "admin") {
      const checkPassword = await bcrypt.compare(password, user.password);

      if (!checkPassword) {
        return res.status(404).json({ msg: "incorrect credential" });
      }

      return res
        .status(200)
        .json({ msg: "login success as admin", role: user.userRole });
    }

    return res.status(404).json({ msg: "incorrect credential" });
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error" });
  }
}

module.exports = {
  handleUserRegister,
  handleUserLogin,
  handelUpdateUserDetails,
  getAllUsers,
  handelJwtTokenBasedLogin,
  handelAdminAccess,
  handelUpload,
};
