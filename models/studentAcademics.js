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
        it1: {
          type: {
            subject: { type: Number },
          },
        },
        it2: {
          type: {
            subject: { type: Number },
          },
        },
        it3: {
          type: {
            subject: { type: Number },
          },
        },
        it4: {
          type: {
            subject: { type: Number },
          },
        },

        odd: {
          type: {
            subject: { type: Number },
            result: { type: Number },
          },
        },

        even: {
          type: {
            subject: { type: Number },
            result: { type: Number },
          },
        },
      },
    ],
  },
});
