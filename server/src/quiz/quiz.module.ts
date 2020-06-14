import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QuizSchema } from 'src/models/quiz.schema';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Quiz', schema: QuizSchema }]), CategoryModule],
  controllers: [QuizController],
  providers: [QuizService],
  exports: [QuizService]
})
export class QuizModule {}
