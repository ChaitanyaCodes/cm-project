import mongoose from "mongoose";

const studentAcademics = new mongoose.Schema({
  fullName: { type: String },
  rollNo: { type: String },
  course: { type: String },
  currentSem: { type: Number },
  marks: {
    type: [
      {
        year: { type: Number },
        term: { type: String },
        subjects: {
          type: [
            {
              subjectName: { type: String },
              sem: { type: Number },
              it1: { type: Number },
              it2: { type: Number },
              semScore: { type: Number },
            },
          ],
        },
        result: { type: Number },
      },
    ],
  },
});
