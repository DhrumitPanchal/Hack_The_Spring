const mongoose = require("mongoose");
const date = new Date();
const currentDate =
  date.getFullYear() +
  "-" +
  (date.getMonth() < 9 ? "0" + date.getMonth() : date.getMonth()) +
  "-" +
  date.getDate();
const WorkSchema = new mongoose.Schema({
  postedBY: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  workerQuantity: {
    type: Number,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  postedDate: {
    type: String,
    default: currentDate,
  },
  applicant: [
    {
      applicantId: {
        type: String,
        required: true,
      },
    },
  ],
});

const Work = mongoose.model("Work", WorkSchema);
module.exports = Work;
