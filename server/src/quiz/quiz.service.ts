import { Injectable, Inject } from '@nestjs/common';
import { QuizInterface } from '../interfaces/quiz.interface';
import { Model } from 'mongoose';

@Injectable()
export class QuizService {
  constructor(
    @Inject('QUIZ_MODEL')
    private quizModel: Model<QuizInterface>,
  ) {}

  async createQuiz(quizDTO) {
    console.log('about to create', quizDTO);
     return this.quizModel.create(quizDTO);
  }

  async getQuizTestsPerCategory(catID: number) {
      console.log('about to fetch ', catID);
      return this.quizModel.find({ 'category': catID }).sort({ name: 1 });
  }

  async searchQuizes(searchParam: string) {
    return this.quizModel.find({ 'name': { '$regex' : searchParam, '$options' : 'i' } }).sort({ name: 1 });
  }
}
