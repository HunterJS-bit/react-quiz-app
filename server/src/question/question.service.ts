import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { QuestionInterface } from "../interfaces/question.interface";

@Injectable()
export class QuestionService {
  constructor(
    @Inject('QUESTION_MODEL')
    private questionModel: Model<QuestionInterface>,
  ) {}

  async create(createQuestion){
    const options = createQuestion.options.map(e => e.name);
    const question = {
      question: createQuestion.question,
      options: options,
    };
    const createdQuestion = new this.questionModel(question);

    return createdQuestion.save();
  }

  async findPerCategory(id: number): Promise<QuestionInterface[]> {
    return this.questionModel.find().exec();
  }

}
