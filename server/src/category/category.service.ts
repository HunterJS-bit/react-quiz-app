import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CategoryInterface } from '../interfaces/category.interface';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_MODEL')
    private categoryModel: Model<CategoryInterface>,
  ) {}

  async create(category){
    const createdQuestion = new this.categoryModel(category);

    return createdQuestion.save();
  }

  async getMainCategories() {
     return this.categoryModel.find( { parent: null } );
  }
}
