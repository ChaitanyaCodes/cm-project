import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String },
  profile: {
    photo: { type: String },
    address: {
      main: { type: String },
      city: { type: String },
      district: { type: String },
      pincode: { type: Number },
    },
    experience: {
      project: { type: Number },
      papersPublished: { type: Number },
      industryExperience: { type: Number },
    },
  },
  subjects: {
    type: [
      {
        year: { type: Number },
        term: { type: String },
        subjectName: { type: String },
        totalStudents: { type: Number },
        subjectAicteScore: { type: mongoose.Schema.Types.Decimal128 },
      },
    ],
  },
  aicteScores: {
    type: [
      {
        year: { type: Number },
        oddSemAicteScore: { type: [mongoose.Schema.Types.Decimal128] },
        evenSemAicteScore: { type: [mongoose.Schema.Types.Decimal128] },
        oddSemAvg: { type: mongoose.Schema.Types.Decimal128 },
        evenSemAvg: { type: mongoose.Schema.Types.Decimal128 },
        effectivenessAvg: { type: mongoose.Schema.Types.Decimal128 },
        supportAvg: { type: mongoose.Schema.Types.Decimal128 },
        extraAvg: { type: mongoose.Schema.Types.Decimal128 },
        AICTE_SCORE: { type: mongoose.Schema.Types.Decimal128 },
      },
    ],
  },
});

const Teacher = mongoose.model("teacher", teacherSchema);

export default Teacher;
