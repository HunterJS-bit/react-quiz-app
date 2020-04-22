import { Injectable, Inject } from '@nestjs/common';
import { QuizInterface } from '../interfaces/quiz.interface';
import { Model } from 'mongoose';

@Injectable()
export class QuizService {
  constructor(
    @Inject('QUIZ_MODEL')
    private questionModel: Model<QuizInterface>,
  ) {}

  async createQuiz(quizDTO) {
    console.log('about to create', quizDTO);
     return this.questionModel.create(quizDTO);
  }

  async getQuizTestsPerCategory(catID: number) {
      console.log('about to fetch ', catID);
      return this.questionModel.find({'category': catID }).sort({ name: 1 });
  }
}
