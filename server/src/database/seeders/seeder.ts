import { Injectable } from '@nestjs/common';

@Injectable()
export class Seeder {
  constructor(
    // private readonly categoryService: CategoryService,
  ) {
  }
  async seed() {
    console.log('SES');

  }
  async categories() {
   // const data = await this.categoryService.createMultiple(categories);
    console.log('Evo ga dataaaa ');
   // console.log(data);
    
  }

  async questionData() {
    
  }
}