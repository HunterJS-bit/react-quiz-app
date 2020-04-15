import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('question')
export class QuestionController {

  @Post()
  createOne() {
    console.log('create one');
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
