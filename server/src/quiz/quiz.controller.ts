import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';
import { QuizService } from "./quiz.service";

@Controller('quiz')
export class QuizController {

  constructor(private quizService: QuizService) { }

  @Post('/create')
  async createQuizTest(@Body() quiz) {
     const data = await this.quizService.createQuiz(quiz);
  }

  @Get('/:catId/list')
  async getQuizTestsPerCategory(@Param('catId') categoryId: number) {
    
      const data = await this.quizService.getQuizTestsPerCategory(categoryId);
      return data;
  }

  @Get('/search')
  async searchQuiz(@Query('name') name: string) {
    const data = await this.quizService.searchQuizes(name);
    return data;
  }
}
