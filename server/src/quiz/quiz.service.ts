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
}
