import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CategoryInterface } from '../interfaces/category.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryService {
  constructor(@InjectModel('Category') private categoryModel: Model<CategoryInterface>) {}


  async create(category){
    const createdQuestion = new this.categoryModel(category);

    return createdQuestion.save();
  }

  async getMainCategories() {
    return this.categoryModel.findOne( { parent: null } );
  }

  async findByName(name): Promise<CategoryInterface> {
    return this.categoryModel.findOne({ name });
  }

  async createMultipleCategories(categories) {
    return this.categoryModel.insertMany(categories);
  }

  async removeAll() {
    return this.categoryModel.deleteMany({});
  }
}
