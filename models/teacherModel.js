import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema(
    {
        profile: {
            name: {type: String},
            email: {type: String},
            photo: {type: String},
            address: {
                main: {type: String},
                city: {type: String},
                district: {type: String},
                pincode: {type: Number}
            },
            experience: {
                projects: {type: Number},
                papersPublished: {type: Number},
                industaryExperience: {type: Number}
            }
        },
        teaching: {
            years: {
                year: {type: Date},
                semesterOne: {
                    teachnigSubjects: {
                        subject: {
                            subjectName: {type: String},
                            totalStudents: {type: Number},
                            AICTE_SCORE: {
                                effectiveness: {type: [[Number]]},
                                support: {type: [[Number]]},
                                extra: {type: [[Number]]},
                                effectivenessAvg: {type: [[mongoose.Schema.Types.Decimal128]]},
                                supportAvg: {type: [[mongoose.Schema.Types.Decimal128]]},
                                totalOf45: {type: [mongoose.Schema.Types.Decimal128]},
                                totalOf25: {type: [mongoose.Schema.Types.Decimal128]},
                                finalAICTE_SCORE: {type : [mongoose.Schema.Types.Decimal128]}
                            }
                        },
                        ComputerGraphics: {
                            totalStudents: {type: Number},
                            AICTE_SCORE: {
                                effectiveness: {type: [[Number]]},
                                support: {type: [[Number]]},
                                extra: {type: [[Number]]},
                                effectivenessAvg: {type: [[mongoose.Schema.Types.Decimal128]]},
                                supportAvg: {type: [[mongoose.Schema.Types.Decimal128]]},
                                totalOf45: {type: [mongoose.Schema.Types.Decimal128]},
                                totalOf25: {type: [mongoose.Schema.Types.Decimal128]},
                                finalAICTE_SCORE: {type : [mongoose.Schema.Types.Decimal128]}
                            }
                        }
                    }
                }
            }
        }
    }
);
const Teacher = mongoose.model("teacher", teacherSchema);

export default Teacher;