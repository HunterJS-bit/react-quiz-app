import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { categories } from './categories';
import { CategoryService } from 'src/category/category.service';
import { QuizService } from 'src/quiz/quiz.service';
import { CategoryInterface } from 'src/interfaces/category.interface';
import { test1 } from './quizes';


@Injectable()
export class Seeder {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly quizService: QuizService,
    @InjectConnection() private connection: Connection
  ) {
  }
  async seed() {
    console.log('started seeding');
   
    // first remove 
    await this.categoryService.removeAll();
    await this.quizService.removeAll();
    const catList = await this.categoryService.createMultipleCategories(categories);
    const category = catList[0]['_id'];
    
    const quizList = Array.from(Array(10).keys());
    const mapped = quizList.map((el, index) => {
      return {
         name: `Test ${index}`,
         slug: `test-${index}`,
         questions: test1,
         category,
      }
    })

    await this.quizService.createMultiple(mapped);
  }
  async categories() {
    
  }

  async questionData() {
    
  }
}