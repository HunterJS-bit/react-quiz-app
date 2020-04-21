import * as mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
  question: { type:String, required:true },
  options: [String],
  answers: Array,
  category: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  }]
});
