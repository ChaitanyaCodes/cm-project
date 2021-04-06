import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    fullName: {type: String},
    email: {type: String},
    enrollmentNo:{type: Number},
    subjectNames: {type: [String]},
    subjectCodes: {type: [String]},
    formInput:{
        subjects:{
            effectiveness: {type: [Number]},
            support: {type: [Number]},
            extra: {type: [Number]},
            effectivenessAvg: {type: mongoose.Schema.Types.Decimal128},
            supportAvg: {type: mongoose.Schema.Types.Decimal128},
            totalOf45: {type: mongoose.Schema.Types.Decimal128},
            totalOf25: {type: mongoose.Schema.Types.Decimal128},
        }
    },
});
const Student = mongoose.model("user", studentSchema);

export default Student;