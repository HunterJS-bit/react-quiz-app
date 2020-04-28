import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { QuizModule } from './quiz/quiz.module';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';

@Module({
  imports: [  
              MongooseModule.forRoot('mongodb://localhost:27017'),
              ConfigModule.forRoot({ load: [config], isGlobal: true }), 
              CategoryModule,
              QuizModule
            ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
