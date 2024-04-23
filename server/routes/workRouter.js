const express = require("express");
const Router = express.Router();
const {
  handelAddWork,
  handelGetAllWork,
  handelUpdateWork,
  handelDeleteWork,
} = require("../controllers/Work");

Router.get("/work", handelGetAllWork);
Router.post("/work", handelAddWork);
Router.put("/work", handelUpdateWork);
Router.delete("/work", handelDeleteWork);

module.exports = Router;
