import { Controller, Post, Body, Get, Param, Query, UseInterceptors, HttpCode, UploadedFile } from '@nestjs/common';
import { diskStorage } from 'multer';
import { QuizService } from './quiz.service';
import { FileInterceptor } from '@nestjs/platform-express';

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

  @Post('/create/question')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
        return cb(null, `${file.originalname}`)
      }
    })
  }))
  @HttpCode(204)
  async createQuestion(@Body() reqBody, @UploadedFile() uploadedImage) {
    const { options, question, quizCategory } = reqBody;
    const questionToCreate = {
      options: JSON.parse(options),
      question,
      quizCategory: JSON.parse(quizCategory),
    }
    const created = await this.quizService.embedQuestions(questionToCreate, uploadedImage);
  }

  @Get('/:id')
  @HttpCode(200)
  async loadQuiz(@Param('id') quizId: number) {
    const data = await this.quizService.loadQuestions(quizId);
    return data;
  }
}
