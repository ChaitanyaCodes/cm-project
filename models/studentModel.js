import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String },
  enrollmentNo: { type: Number },
  subjectNames: { type: [String] },
  subjectCodes: { type: [String] },
  formInput: {
    effectiveness: { type: [Number] },
    support: { type: [Number] },
    extra: { type: [Number] },
    effectivenessAvg: { type: mongoose.Schema.Types.Decimal128 },
    supportAvg: { type: mongoose.Schema.Types.Decimal128 },
    totalOf45: { type: mongoose.Schema.Types.Decimal128 },
    totalOf25: { type: mongoose.Schema.Types.Decimal128 },
  },
});

// const studentSchema = new mongoose.Schema({
//     email: {type: String, required:true}
// });
const Student = mongoose.model("student", studentSchema);

export default Student;
