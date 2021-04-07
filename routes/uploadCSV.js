import Student from '../models/studentModel.js'
import csvtojson from 'csvtojson';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express, { Router } from 'express';

dotenv.config();
const app = express();
app.use(express.json());
// const paths = ['../assets/csvFiles/aca.csv','../assets/csvFiles/cl.csv', '../assets/csvFiles/sw.csv','../assets/csvFiles/nw.csv','../assets/csvFiles/cg.csv']//Uncomment For Multiple CSV
const path = '../client/src/assets/csvFiles/aca.csv';//Toggle comment this for Single input
// paths.forEach(path => {//Uncomment For Multiple CSV
const CONNECTION_URI = process.env.DB;
mongoose.connect(CONNECTION_URI, 
  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

    mongoose.set('useFindAndModify',false);

    csvtojson()
    .fromFile(path)
    .then(async (json)=>{
        const teacherName = json.teacherName;
        //Common Array
            var effectivenessArray = [];
            var supportArray = [];
            var extraArray = [];
            var effectivenessCount = 0 ;
            var supportCount = 0 ;
            var extraCount = 0 ;
            var size = json.length;
            // console.log(json[0]);
            var students = 
                {
                    email : "livio@gmail.com"
                };
                // {
                //     fullName : "Vineet",
                //     email : "vineet@gmail.com"
                // },
                // {
                //     fullName : "Chaitanya",
                //     email : "codes@gmail.com"
                // };
            const {email} = {
                email : "livio@gmail.com"
            };
                const newStudent = new Student({
                    email
                });

            await newStudent.save()
            .then(function(result){
                console.log("Data inserted",result) // Success
            }).catch(function(error){
                console.log(error);      // Failure
            });

            // function(err, result) {
            //     if (err) {
            //         console.log("Error", err);
            //     } else {
            //         console.log("Result",result);
            //     }
            //   }


            // for(var count = 0; count < size; count++){
            //     extraArray[extraCount++] = json[count].Q1;
            //     extraArray[extraCount++] = json[count].Q2;
            //     effectivenessArray[effectivenessCount++] = json[count].Q3;
            //     effectivenessArray[effectivenessCount++] = json[count].Q4;
            //     effectivenessArray[effectivenessCount] = json[count].Q5;
            //     extraArray[extraCount++] = json[count].Q6;
            //     extraArray[extraCount++] = json[count].Q7;
            //     supportArray[supportCount++] = json[count].Q8;
            //     supportArray[supportCount] = json[count].Q9;
            //     extraArray[extraCount++] = json[count].Q10;
            //     extraArray[extraCount++] = json[count].Q11;
            //     extraArray[extraCount] = json[count].Q12;
            //     effectivenessCount = 0 ;
            //     supportCount = 0 ;
            //     extraCount = 0 ;

                // console.log("Student ", count);
                // console.log("effectiveness",effectivenessArray);
                // console.log("Support",supportArray);
                // console.log("Extra",extraArray);
            //}
        }); 
// });//Uncomment For Multiple CSV