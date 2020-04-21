import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { DatabaseModule } from '../database/database.module';
import { quizProviders } from './quiz.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [QuizController],
  providers: [QuizService, ...quizProviders]
})
export class QuizModule {}
