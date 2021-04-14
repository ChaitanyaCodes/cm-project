import Student from "../models/studentModel.js";
import Teacher from "../models/teacherModel.js";
import csvtojson from "csvtojson";
import express from "express";
import lodash from "lodash";

const router = express.Router();

// const path = '../client/src/assets/csvFiles/aca.csv';
const path = "./client/src/assets/csvFiles/aca.csv";
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
		csvtojson()
		.fromFile(path)
		.then(async (json) => {
        	var effectiveness = [];
        	var support = [];
        	var extra = [];
        	var size = json.length;
        	var studentsArray = [];
        	var studentCount = 0;
			var arrOf25 = [];
        	for (var count = 0; count < size; count++) {
				var effectivenessCount = 0;
				var supportCount = 0;
				var extraCount = 0;
				var teacherName = json[count].TeacherName;
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
				var effectivenessAvg = calcAvg(effectiveness);
				var supportAvg = calcAvg(support);
				var totalOf45 =  calcOf45(supportAvg, effectivenessAvg, extra);
				var totalOf25 = calcOf25(totalOf45);
				console.log(totalOf25);
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
			var term = json[0].Term;
			var oddTerm = "Odd";
			if(term === oddTerm){
				const newTeacher = new Teacher({
					profile:{
						name : teacherName,
					},
					teaching:{
						years:{
							oddSem:{
								teachnigSubjects:{
									subject:{
										subjectAicteScore,
									}
								}
							}
						}
					}
				});
				await newTeacher.save();
			}else{
				const newTeacher = new Teacher({
					profile:{
						name : teacherName,
					},
					teaching:{
						years:{
							evenSem:{
								teachnigSubjects:{
									subject:{
										subjectAicteScore,
									}
								}
							}
						}
					}
				});
				await newTeacher.save();
			}
			console.log(subjectAicteScore);
			
			res.status(200).json({ errorMessage: "Data Stored" });
        	// console.log("All", studentsArray);
		});
	}
	catch (error) {
		console.error(error);
		return res.status(500).json({ errorMessage: "File could not upload" });
	}
});

export default router;