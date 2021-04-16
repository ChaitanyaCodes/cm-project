import Teacher from "../models/teacherModel.js";
import express from "express";
const router = express.Router();
import lodash from "lodash";
router.post("/semaicet", async (req, res) => {
  try {
    const { fullName } = req.body;
    const tr_data = await Teacher.find({ fullName });

    const tr_subject_size = tr_data[0].teaching.subjects;
    let evenArr = [];
    let oddArr = [];
    for (let i = 0; i < tr_subject_size.length; i++) {
      if (tr_data[0].teaching.subjects[i].term == "Even") {
        evenArr.push(
          parseFloat(tr_data[0].teaching.subjects[i].subjectAicteScore)
        );
      } else {
        oddArr.push(
          parseFloat(tr_data[0].teaching.subjects[i].subjectAicteScore)
        );
      }
    }
    const evenSemAvg = calcAvg(evenArr);
    const oddSemAvg = calcAvg(oddArr);
    console.log("evenSemAvg", evenSemAvg);
    console.log("oddSemAvg", oddSemAvg);

    res.status(200).json({ errorMessage: "Data retrieved" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errorMessage: "cannot fetch teacher data." });
  }
});
var calcAvg = (inArray) => {
  var size = inArray.length;
  var sum = lodash.sum(inArray);
  return parseFloat((sum / size).toFixed(3));
};

export default router;
