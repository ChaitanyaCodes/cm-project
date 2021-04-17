import Student from "../models/studentModel.js";
import Teacher from "../models/teacherModel.js";
import csvtojson from "csvtojson";
import express from "express";
import lodash from "lodash";
import fileUpload from "express-fileupload";
import path from "path";

const __dirname = path.resolve();

const router = express.Router();
router.use(fileUpload());

var csvFilePath = "";
// const csvFilePath = "../client/public/uploads/cg.csv";
var calcAvg = (inArray) => {
    var size = inArray.length;
    var sum = lodash.sum(inArray);
    return parseFloat((sum / size).toFixed(3));
};
var calcOf45 = (totalOne, totalTwo, arr) => {
    var totalThree = lodash.sum(arr);
    var total = parseFloat(totalOne + totalTwo + totalThree).toFixed(3);
    return total;
};
var calcOf25 = (total) => {
    return parseFloat((25 * total) / 45).toFixed(3);
};
router.post("/csv", async(req, res) => {
    try {
        if (req.files === null) {
            return res.status(400).json({ msg: "No file uploaded" });
        }
        const file = req.files.file;
        var fileName = file.name;
        csvFilePath = path.join(__dirname, "client", "public", "uploads", fileName);
        // console.log(csvFilePath);
        await file.mv(csvFilePath, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
        });
        csvtojson()
            .fromFile(csvFilePath)
            .then(async(json) => {
                // form Common Details
                var term = json[0].Term;
                var teacherName = json[0].TeacherName;
                var subjectName = json[0].Subject;
                var year = parseInt(json[0].Year);
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
                    var totalOf45 = calcOf45(supportAvg, effectivenessAvg, extra);
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
                        totalOf25,
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
                    await newStudent.save();
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
                const existingTeacher = await Teacher.findOne({
                    fullName: teacherName,
                });
                // Start Create New Teacher
                if (!existingTeacher) {
                    const newTeacher = new Teacher({
                        fullName: teacherName,
                    });
                    await newTeacher.save();
                }
                // End Create New Teacher

                // Start Push Teacher Subject Details
                const oldTeacher = await Teacher.updateOne({ fullName: teacherName }, {
                    $push: {
                        subjects: subject,
                    },
                });
                // End Push Teacher Subject Details

                // Start Checking and Storing AICTE score based on Term
                if (term == oddTerm) {
                    // Adding the Avg to oddSemAicteScore
                    const oldTeacher = await Teacher.updateOne({
                            aicteScores: { $elemMatch: { year: year } },
                            fullName: teacherName,
                        }, {
                            $push: {
                                "aicteScores.$.oddSemAicteScore": subjectAicteScore,
                            },
                        }, {
                            new: true,
                            upsert: true, //updated if found insert if not found
                        },
                        function(err) {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log("Pushed to oddSemAicteScore");
                            }
                        }
                    );
                } else {
                    // Adding the Avg to evenSemAicteScore
                    const oldTeacher = await Teacher.updateOne({
                            aicteScores: { $elemMatch: { year: year } },
                            fullName: teacherName,
                        }, {
                            $push: {
                                "aicteScores.$.evenSemAicteScore": subjectAicteScore,
                            },
                        }, {
                            new: true,
                            upsert: true, //updated if found insert if not found
                        },
                        function(err) {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log("Pushed to evenSemAicteScore");
                            }
                        }
                    );
                }
                // End Checking and Storing AICTE score based on Term

                // Calculating SemAicteAvg

                const oldTeacher = await Teacher.findOne({
                    aicteScores: { $elemMatch: { year: year } },
                    fullName: teacherName,
                });
                var aicteScoresArr = [];
                var oddSemAvg;
                var evenSemAvg;
                aicteScoresArr = oldTeacher.aicteScores;
                aicteScoresArr.forEach(async(object) => {
                    // Calculating oddSemAvg
                    var oddSemAicteScore = [];
                    // Retiveing oddSemAicteScore Array and storing locally
                    for (var count = 0; count < object.oddSemAicteScore.length; count++) {
                        oddSemAicteScore.push(parseFloat(object.oddSemAicteScore[count]));
                    }
                    oddSemAvg = calcAvg(oddSemAicteScore); //calculating Avg and storing locally

                    // Calculating evenSemAvg
                    var evenSemAicteScore = [];
                    // Retiveing evenSemAicteScore Array and storing locally
                    for (
                        var count = 0; count < object.evenSemAicteScore.length; count++
                    ) {
                        evenSemAicteScore.push(parseFloat(object.evenSemAicteScore[count]));
                    }
                    evenSemAvg = calcAvg(evenSemAicteScore); //calculating Avg and storing locally
                });
                res.status(200).json({ errorMessage: "Data Stored" });
            });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ errorMessage: "File could not upload" });
    }
});

export default router;