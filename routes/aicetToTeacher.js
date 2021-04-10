import express from "express";
import lodash from "lodash";
const router = express.Router();
import StudentModel from "../models/studentModel.js";
import TeacherModel from "../models/teacherModel.js";
router.post("/studentdata", async (req, res) => {
  try {
    const { teacherName } = req.body;
    const data = await StudentModel.find({ teacherName });
    const val = [];
    for (let i = 0; i < data.length; i++) {
      val.push(parseFloat(data[i].formInput.totalOf25));
    }
    const subjectAicteScore = calcAvg(val);
    console.log(subjectAicteScore);

    res.status(200).json({ errorMessage: "data retrieved!" });
  } catch (err) {
    console.error(err);
    res.status(500).send("erroroccured");
  }
});
var calcAvg = (inArray) => {
  var size = inArray.length;
  var sum = lodash.sum(inArray);
  return parseFloat((sum / size).toFixed(3));
};
export default router;
