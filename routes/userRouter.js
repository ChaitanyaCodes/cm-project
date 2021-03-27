import User from '../models/usersModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();
const teacherKey = "welcometeacher";
const adminKey = "manager";
router.post('/signup', async (req, res) => {
    try{
        const {email, password, confirmPwd, fullName, role, key} = req.body;
        // signup validation
        if(!email || !password || !confirmPwd )
            return res
                .status(400)
                .json({errorMessage: "Please Enter All fields."});
        if(password.length < 8 )
            return res
            .status(400)
            .json({errorMessage: "Please Enter Password of atleast 8 characters."});
        if(role == 2 && key !== teacherKey)
            return res
            .status(400)
            .json({errorMessage: "Wrong Key."});
        if(role == 3 && key !== adminKey)
            return res
            .status(400)
            .json({errorMessage: "Wrong Key."});

        const existingUser = await User.findOne({email});
        if(password !== confirmPwd)
            return res
                .status(400)
                .json({errorMessage: "Please enter the same password twice"});
        if(existingUser)
            return res
                .status(400)
                .json({errorMessage: "User already exists."});
                        // Hash Password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        //save new user 
        const newUser = new User({
            fullName,
            role,
            email, 
            passwordHash,
        });
        const savedUser = await newUser.save();

        // // log user
        const token = jwt.sign({
            user: savedUser._id
        },process.env.JWT_SECRET);
        
        // Send the token in a HTTP-only cookie
        res.cookie('token', token,{
            httpOnly: true,
        }).send("userCreated");
    }catch(err){
        console.error(err);
        res.status(500).send("erroroccured");
    }
} );

router.post('/login', async (req,res)=>{
    try{
        const {email, password} = req.body;
        // login validate
        if(!email || !password)
            return res
                .status(400)
                .json({errorMessage: "Please Enter All fields."});
        const existingUser = await User.findOne({email});
        if(!existingUser)
            return res
            .status(401)
            .json({errorMessage: "Wrong email or password"});
            
            const correctPwd = await bcrypt.compare(password, existingUser.passwordHash);
            if(!correctPwd)
            return res
            .status(401)
            .json({errorMessage: "Wrong email or password"});
        // log user
        const token = jwt.sign({
            user: existingUser._id
        },process.env.JWT_SECRET);
        // Send the token in a HTTP-only cookie
        res.cookie('token', token,{
            httpOnly: true,
        }).send('logged');
        } catch(err){
            console.log("catch scope");
            res.status(500).send();
        }
});
// logout
router.use('/logout',(req, res)=>{
    res.cookie('token','',{
        httpOnly: true,
        expires: new Date(0)
    }).send("Logged Out");
});

// checked if user is logged in //
router.get("/loggedIn", (req, res) => {
    try {
      const token = req.cookies.token;
      if (!token) 
        return res.json(false);
  
      jwt.verify(token, process.env.JWT_SECRET);
    //   req.user = verified.user;
  
      res.send(true);
    } catch (err) {
        console.log("not logged")
        res.json(false);
    }
  });
export default router;