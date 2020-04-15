import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { QuestionInterface } from "../interfaces/question.interface";

@Injectable()
export class QuestionService {
  constructor(
    @Inject('QUESTION_MODEL')
    private questionModel: Model<QuestionInterface>,
  ) {}

  async create(createCatDto): Promise<QuestionInterface> {
    const createdCat = new this.questionModel(createCatDto);
    console.log('kreiramo');
    return createdCat.save();
  }

  async findAll(): Promise<QuestionInterface[]> {
    return this.questionModel.find().exec();
  }

}
