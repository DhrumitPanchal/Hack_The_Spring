const express = require("express");
const { handelSendMessage } = require("../controllers/Contact");
const Router = express.Router();

Router.post("/message", handelSendMessage);

module.exports = Router;
