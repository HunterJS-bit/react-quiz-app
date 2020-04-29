import { Module } from '@nestjs/common';
import { Seeder } from './seeder';
import { CategoryModule } from 'src/category/category.module';
import { MongooseModule } from '@nestjs/mongoose';
import { QuizModule } from 'src/quiz/quiz.module';
import { ConfigModule } from '@nestjs/config';
import config from 'src/config/config';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017'), ConfigModule.forRoot({ load: [config], isGlobal: true }), CategoryModule, QuizModule],
  providers: [Seeder],
})
export class SeederModule {}