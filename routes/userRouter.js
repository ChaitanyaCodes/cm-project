// password
// <v'SJm:n.KFP3tFxyz+xuW7P6g8S,+n+_/Zq8dVN=aKW@6JmPN-TcVL/'L{eYeRA}p~RTrS@LH@F~WW,"AHm7e-,!Y{5Qk./H-CNfqUb(J)wt'Qj[s!''PC_2FTXvH@:qx{sXxpr}LaXdc^SCB-wdJ4[}V9(@)Mz8v/(_855MPNC:?7-*"<(uX=.8%~&}LkSvK"bJs+>4huXT/v*H=BY(e/fjXEMNkL4"XmS*z#gS68=&neQ}[M^JCy{f5_fS#cL
const router = require('express').Router();
const User = require('../models/usersModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/', async(req, res) => {
    try{
        const {email, password} = req.body;
        //validation
        if(!email || !password)
            return res
                .status(400)
                .json({errorMessage: "Please Enter All fields."});
        if(password.length < 8 )
            return res
            .status(400)
            .json({errorMessage: "Please Enter Password of atleast 8 characters."});
            const existingUser = await User.findOne({email});
        if(existingUser)
            return res
                .status(400)
                .json({errorMessage: "User already exists."});
        // Hash Password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        //save new user 
        const newUser = new User({
            email, 
            passwordHash,
        });
        const savedUser = await newUser.save();

        // log user
        const token = jwt.sign({
            user: savedUser._id
        }.process.env.JWT_SECRET);
        
        // Send the token in a HTTP-only cookie
        res.cookie('token', token,{
            httpOnly: true,
        }).send();
    }catch(err){
        console.error(err);
        res.status(500).send();
    }
} );
module.exports = router;