import Teacher from "../models/teacherModel.js";
// import Student from "../models/studentModel.js";
import express from "express";

const router = express.Router();

// Retrieving Teacher Data
router.get("/teacher", async (req, res) => {
    try{
        const teacherDataA = await Teacher.find();
        console.log("Data Retrieved");
        return res.status(200).json({ teacherDataA });
    }catch (error) {
        console.error(error);
        return res.status(500).json({ errorMessage: "Data Could Not Be Retrieved" });
      }
});

// Retreving Student Data
// router.post("/student", async (req, res) => {
//     try{
//     }
//     catch (error) {
//         console.error(error);
//         return res.status(500).json({ errorMessage: "Data Could Not Be Retrieved" });
//       }
// });
export default router;
