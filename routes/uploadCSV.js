import Student from "../models/studentModel.js";
import csvtojson from "csvtojson";
import express from "express";

const router = express.Router();

// const path = '../client/src/assets/csvFiles/aca.csv';
const path = "./client/src/assets/csvFiles/aca.csv";

router.post("/csv", async (req, res) => {
	try {
		csvtojson()
		.fromFile(path)
		.then(async (json) => {
        	var effectiveness = [];
        	var support = [];
        	var extra = [];
        	var size = json.length;
        	var studentsArray = [];
        	var studentCount = 0;
        	for (var count = 0; count < size; count++) {
				var effectivenessCount = 0;
				var supportCount = 0;
				var extraCount = 0;
				const fullName = json[count].Name;
				const email = json[count].Username;
				const enrollmentNo = json[count].EnrollmentNumber;
				extra[extraCount++] = json[count].Q1;
				extra[extraCount++] = json[count].Q2;
				effectiveness[effectivenessCount++] = json[count].Q3;
				effectiveness[effectivenessCount++] = json[count].Q4;
				effectiveness[effectivenessCount] = json[count].Q5;
				extra[extraCount++] = json[count].Q6;
				extra[extraCount++] = json[count].Q7;
				support[supportCount++] = json[count].Q8;
				support[supportCount] = json[count].Q9;
				extra[extraCount++] = json[count].Q10;
				extra[extraCount++] = json[count].Q11;
				extra[extraCount] = json[count].Q12;
				var formInput = {
					effectiveness,
					support,
					extra,
				};
				studentsArray[studentCount++] = {
					fullName,
					email,
					enrollmentNo,
					formInput,
				};
				console.log(formInput);
				const newStudent = new Student({
					fullName,
					email,
					enrollmentNo,
					formInput,
				});
				await newStudent.save()
        	}
			res.status(200).json({ errorMessage: "Data Stored" });
        	console.log("All", studentsArray);
		});
	}
	catch (error) {
		console.error(error);
		return res.status(500).json({ errorMessage: "File could not upload" });
	}
});

export default router;