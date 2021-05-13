import User from "../models/usersModel.js";
import express from "express";

const router = express.Router();

// Retrieving UserData
router.get("/userData", async (req, res) => {
    try{
        const users = await User.find();
        var adminCount = 0;
        var teacherCount = 0;
        var studentCount = 0;
        users.forEach(user => {
            var role =  user.role;
            if(role == 1){
                studentCount++;
            }
            else if(role == 2){
                teacherCount++;
            }
            else{
                adminCount++;
            }
        });
        var userCount =  {
            "Student" : studentCount,
            "Teacher" : teacherCount,
            "Admin" : adminCount
        };
        return res.status(200).json({ userCount });
    }catch (error) {
        console.error(error);
        return res.status(500).json({ errorMessage: "Data Could Not Be Retrieved" });
      }
});
export default router;
