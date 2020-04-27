import * as mongoose from 'mongoose';

export const QuizSchema = new mongoose.Schema({
  name: { type:String, required:true },
  slug: { type:String, required:true  },
  questions: [],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  }
});

