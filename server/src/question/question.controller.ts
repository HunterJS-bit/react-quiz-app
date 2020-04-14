import { Controller, Get, Param } from '@nestjs/common';

@Controller('question')
export class QuestionController {


  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
