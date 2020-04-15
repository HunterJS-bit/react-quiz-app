import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, QuestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
