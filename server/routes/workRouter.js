const express = require("express");
const Router = express.Router();
const {
  handelAddWork,
  handelGetAllWork,
  handelUpdateWork,
  handelDeleteWork,
  handelApplyForWork,
} = require("../controllers/Work");

Router.get("/work", handelGetAllWork);
Router.post("/work", handelAddWork);
Router.put("/work", handelUpdateWork);
Router.put("/work/apply", handelApplyForWork);
Router.delete("/work", handelDeleteWork);

module.exports = Router;
