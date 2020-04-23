import { Controller, Get, Param, Post, HttpCode, Body, UseInterceptors, UploadedFile,  } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { QuestionService } from './question.service';
import { diskStorage } from 'multer';

@Controller('question')
export class QuestionController {

  constructor(private questionService: QuestionService) { }

  @Post()
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
  async createOne(@Body() reqBody, @UploadedFile() uploadedData) {
    console.log(uploadedData);
    const { options, question, quizCategory } = reqBody;
    const questionToCreate = {
      options: JSON.parse(options),
      question,
      quizCategory: JSON.parse(quizCategory)
    }
    console.log(questionToCreate);
    // const created = await this.questionService.create(data);
    // console.log('creairano ', created);
  }

  @Get(':id')
  findOne(@Param('id') qListID) {
    console.log('Helloo', qListID);
    this.questionService.findPerCategory(qListID);
  }
}
