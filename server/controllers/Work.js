const Work = require("../models/WorkModel");

async function handelGetAllWork(req, res) {
  try {
    const works = await Work.find();
    if (!works) {
      return res.status(404).json({ msg: "not have any work" });
    }
    res.status(200).json({ msg: "successfully get all the works ", works });
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error" });
  }
}

async function handelAddWork(req, res) {
  const { data } = req.body;
  if (!data) {
    return res.status(404).json({ msg: "all details are required" });
  }

  try {
    const work = await Work.create(data);

    res.status(201).json({ msg: "Work added successfully", work });
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error" });
  }
}

async function handelUpdateWork(req, res) {
  const { id, data } = req.body;
  console.log(id, data )
  if (!id || !data) return res.json({ msg: "work id and data is required" });
  try {
    const findWork = await Work.findById(id);

    if (!findWork) {
      return res.status(404).json({ msg: "work not found" });
    }

    const updatedWork = await Work.findByIdAndUpdate(id, data);
    res.status(200).json({ updatedWork, msg: "work updated successfully" });
  } catch (error) {
    return res.status(500).json({ error, msg: "Internal server error" });
  }
}

async function handelDeleteWork(req, res) {
  const { id } = req.body;
  console.log(id);

  if (!id) return res.json({ msg: "work id is required" });

  try {
    const findWork = await Work.findById(id);
    if (!findWork) {
      return res.status(404).json({ msg: "work not found" });
    }
    const deletedWork = await Work.findByIdAndDelete(id);
    res
      .status(200)
      .json({ msg: "work deleted successfully", result: deletedWork });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
}

module.exports = {
  handelAddWork,
  handelGetAllWork,
  handelUpdateWork,
  handelDeleteWork,
};
