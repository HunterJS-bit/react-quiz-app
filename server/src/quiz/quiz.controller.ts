import { Controller, Post, Body } from '@nestjs/common';
import { QuizService } from "./quiz.service";

@Controller('quiz')
export class QuizController {

  constructor(private quizService: QuizService) { }

  @Post('/create')
  async createQuizTest(@Body() quiz) {
     const data = await this.quizService.createQuiz(quiz);
  }

}
