import User from "../models/usersModel.js";
import jwt from "jsonwebtoken";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();
router.post("/acc", (req, res) => {
  try {
    const { token } = req.body;
    if (!token) {
      return res.status(400).json({ errorMessage: "Please enter your name." });
    } else {
      jwt.verify(token, process.env.JWT_SECRET, async(err, decodedToken) => {
        if (err) {
          console.log("Wrong or expired link");
          return res
            .status(400)
            .json({ errorMessage: "Wrong or expired links" });
        }
        const { email, passwordHash, fullName, role } = decodedToken;
        const existingUser = await User.findOne({ email });
        if (existingUser)
          return res.status(400).json({ errorMessage: "User already exists." });
        //save new user
        const newUser = new User({
          fullName,
          role,
          email,
          passwordHash
        });
        const savedUser = await newUser.save((err, success)=>{
            if(err){
                console.log("Error activating account:", err);
                return res
                .status(400)
                .json({errorMessage: "Error activating account."});
            }
            console.log("Account activated");
            return res.json({errorMessage: "Account activated"});
        });
      });
    }
  } catch (err) {
    console.log("Something went wrong");
    res.json({ errorMessage: "Something went wrong" });
  }
});
export default router;
