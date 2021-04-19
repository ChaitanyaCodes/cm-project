import Teacher from "../models/teacherModel.js";
// import Student from "../models/studentModel.js";
import express from "express";

const router = express.Router();

// Retrieving Teacher Data
router.post("/teacher", async (req, res) => {
    try{
        const teacherData = await Teacher.find();
        console.log(teacherData);
        return res.status(200).json({ errorMessage: "Data Retrieved" });
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
