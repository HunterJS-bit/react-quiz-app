import * as mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
  question: { type:String },
  image: { type: String },
  position: { type: Number },
  options: [String],
  answers: [Number],
});
