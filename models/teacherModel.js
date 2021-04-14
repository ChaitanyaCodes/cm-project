import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  profile: {
    name: { type: String },
    email: { type: String },
    photo: { type: String },
    address: {
      main: { type: String },
      city: { type: String },
      district: { type: String },
      pincode: { type: Number },
    },
    experience: {
      projects: { type: Number },
      papersPublished: { type: Number },
      industaryExperience: { type: Number },
    },
  },
  teaching: {
    years: {
      year: { type: Date },
      oddSem: {
        teachnigSubjects: {
          subject: {
            subjectName: { type: String },
            subjectCode: { type: String },
            totalStudents: { type: Number },
            subjectAicteScore: { type: mongoose.Schema.Types.Decimal128 },
          },
          finalAICTEScoreOddSem: { type: mongoose.Schema.Types.Decimal128 },
        },
      },
      evenSem: {
        teachnigSubjects: {
          subject: {
            subjectName: { type: String },
            subjectCode: { type: String },
            totalStudents: { type: Number },
            subjectAicteScore: { type: mongoose.Schema.Types.Decimal128 },
          },
        },
        finalAICTEScoreEvenSem: { type: mongoose.Schema.Types.Decimal128 },
      },
      finalAICTEScore: { type: mongoose.Schema.Types.Decimal128 },
    },
  },
});
const Teacher = mongoose.model("teacher", teacherSchema);

export default Teacher;
