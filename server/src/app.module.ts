import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';
import { DatabaseModule } from './database/database.module';
import { CategoryModule } from './category/category.module';
import { QuizModule } from './quiz/quiz.module';

@Module({
  imports: [DatabaseModule, QuestionModule, CategoryModule, QuizModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
