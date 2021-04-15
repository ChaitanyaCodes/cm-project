import Student from "../models/studentModel.js";
import Teacher from "../models/teacherModel.js";
import csvtojson from "csvtojson";
import express from "express";
import lodash from "lodash";
import fileUpload from 'express-fileupload';
import path from "path";

const __dirname = path.resolve();

const router = express.Router();
router.use(fileUpload());

var  csvFilePath = "";  
// const csvFilePath = "../client/public/uploads/cg.csv";
var calcAvg =  inArray =>{
	var size = inArray.length;
	var sum = lodash.sum(inArray);
	return parseFloat((sum/ size).toFixed(3)); 
};
var calcOf45 = (totalOne, totalTwo, arr) => {
	var totalThree = lodash.sum(arr);
	var total = parseFloat((totalOne + totalTwo + totalThree)).toFixed(3);
	return total;
}
var calcOf25 = total => {
	return parseFloat((25*total)/45).toFixed(3);
}
router.post("/csv", async (req, res) => {
	try {
		if (req.files === null) {
			return res.status(400).json({ msg: 'No file uploaded' });
		}
		const file = req.files.file;
		var fileName = file.name;
		csvFilePath = path.join(__dirname, "client", "public", "uploads", fileName);
		console.log(csvFilePath);
		await file.mv(csvFilePath, err => {
			if (err) {
				console.error(err);
				return res.status(500).send(err);
			}
		});
		csvtojson()
		.fromFile(csvFilePath)
		.then(async (json) => {
			// form Common Details
			var term = json[0].Term;
			var teacherName = json[0].TeacherName;
			var subjectName = json[0].Subject;
			var year = json[0].Year;
        	var size = json.length;


        	var effectiveness = [];
        	var support = [];
        	var extra = [];
        	var studentsArray = [];
        	var studentCount = 0;
			var arrOf25 = [];
			var oddTerm = "Odd";
			var evenTerm = "Even";
        	for (var count = 0; count < size; count++) {
				var effectivenessCount = 0;
				var supportCount = 0;
				var extraCount = 0;
				const fullName = json[count].Name;
				const email = json[count].Username;
				const enrollmentNo = json[count].EnrollmentNumber;
				extra[extraCount++] = parseInt(json[count].Q1);
				extra[extraCount++] = parseInt(json[count].Q2);
				effectiveness[effectivenessCount++] = parseInt(json[count].Q3);
				effectiveness[effectivenessCount++] = parseInt(json[count].Q4);
				effectiveness[effectivenessCount] = parseInt(json[count].Q5);
				extra[extraCount++] = parseInt(json[count].Q6);
				extra[extraCount++] = parseInt(json[count].Q7);
				support[supportCount++] = parseInt(json[count].Q8);
				support[supportCount] = parseInt(json[count].Q9);
				extra[extraCount++] = parseInt(json[count].Q10);
				extra[extraCount++] = parseInt(json[count].Q11);
				extra[extraCount] = parseInt(json[count].Q12);
				// Calculating Averages
				var effectivenessAvg = calcAvg(effectiveness);
				var supportAvg = calcAvg(support);
				var totalOf45 =  calcOf45(supportAvg, effectivenessAvg, extra);
				var totalOf25 = calcOf25(totalOf45);
				// console.log(totalOf25);
				arrOf25.push(parseFloat(totalOf25));
				var formInput = {
					effectiveness,
					support,
					extra,
					effectivenessAvg,
					supportAvg,
					totalOf45,
					totalOf25
				};
				studentsArray[studentCount++] = {
					fullName,
					email,
					enrollmentNo,
					teacherName,
					formInput,
				};
				const newStudent = new Student({
					fullName,
					email,
					enrollmentNo,
					formInput,
				});
				await newStudent.save()
        	}
			var subjectAicteScore = calcAvg(arrOf25);
			// console.log(subjectAicteScore);

			var subject = {
				year,
				term,
				subjectName,
				totalStudents: size,
				subjectAicteScore,
			};
			const newTeacher =  new Teacher({
				fullName : teacherName,
			});
			await newTeacher.save();
			const oldTeacher = await Teacher.findOne({fullName : teacherName});
			oldTeacher.teaching.subjects.push(subject);
			await oldTeacher.save();
			const scoreTeacher = await Teacher.findOne({fullName : teacherName}, {teaching:{aicteScores:{year}}});
			if(term === oddTerm){
				scoreTeacher.aicteScores.oddSemAicteScore.push(subjectAicteScore);
			}
			else{
				scoreTeacher.aicteScores.evenSemAicteScore.push(subjectAicteScore);
			}
			// console.log(oldTeacher);
			res.status(200).json({ errorMessage: "Data Stored" });
		});
	}
	catch (error) {
		console.error(error);
		return res.status(500).json({ errorMessage: "File could not upload" });
	}
});

export default router;