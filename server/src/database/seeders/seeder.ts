import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { categories } from './categories';
import { CategoryService } from 'src/category/category.service';
import { QuizService } from 'src/quiz/quiz.service';


@Injectable()
export class Seeder {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly quizService: QuizService,
    @InjectConnection() private connection: Connection
  ) {
  }
  async seed() {
    console.log('SES');
   
    const catList = await this.categoryService.createMultipleCategories(categories);
    const [catA, catB, catC] = catList;
    
    // const quizList = Array.from(Array(10).keys());
    // console.log(quizList);
    console.log(catList);

  }
  async categories() {
   // const data = await this.categoryService.createMultiple(categories);
    console.log('Evo ga dataaaa ');
   // console.log(data);
    
  }

  async questionData() {
    
  }
}