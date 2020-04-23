import { Controller, Get, Param, Post, HttpCode, Body } from '@nestjs/common';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {

  constructor(private questionService: QuestionService) { }

  @Post()
  @HttpCode(204)
  async createOne(@Body() data) {
    const created = await this.questionService.create(data);
    console.log('creairano ', created);
  }

  @Get(':id')
  findOne(@Param('id') qListID) {
    console.log('Helloo', qListID);
    this.questionService.findPerCategory(qListID);
  }
}
