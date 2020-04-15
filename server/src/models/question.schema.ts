import * as mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
