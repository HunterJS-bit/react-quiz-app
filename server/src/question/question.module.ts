import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { DatabaseModule } from "../database/database.module";
import { questionProviders } from "./question.provider";

@Module({
  imports: [DatabaseModule],
  providers: [QuestionService, ...questionProviders],
  controllers: [QuestionController]
})
export class QuestionModule {}
