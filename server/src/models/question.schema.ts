import * as mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
  question: String,
  options: Array,
  answers: Array,
});
