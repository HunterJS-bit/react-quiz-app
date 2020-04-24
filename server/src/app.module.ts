import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';
import { DatabaseModule } from './database/database.module';
import { CategoryModule } from './category/category.module';
import { QuizModule } from './quiz/quiz.module';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';

@Module({
  imports: [ConfigModule.forRoot({ load: [config], isGlobal: true }), DatabaseModule, QuestionModule, CategoryModule, QuizModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
