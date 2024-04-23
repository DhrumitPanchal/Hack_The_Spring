const ContactUs = require("../models/ContactModel");

async function handelSendMessage(req, res) {
  const { name, email, contactNo, message } = req.body;
  console.log(name, email, contactNo, message);
  if (!name || !email || !contactNo || !message) {
    return res.status(404).json({ msg: "all details is required" });
  }

  try {
    const result = await ContactUs.create({
      name,
      email,
      contactNo,
      message,
    });

    return res.status(201).json({ msg: "message send successfully", result });
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error" });
  }
}

module.exports = { handelSendMessage };
