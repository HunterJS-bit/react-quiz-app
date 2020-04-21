import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
  name: { type:String, required:true },
  slug: String,
});
