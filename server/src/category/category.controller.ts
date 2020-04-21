import { Controller, Post, Get, Body, HttpCode } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {

  constructor(private categoryService: CategoryService) { }

  @Post()
  @HttpCode(204)
  async createCategory(@Body() category) {
    console.log('evo je kategorija ', category);
    const data = await this.categoryService.create(category);
  }

  @Get('/main')
  async getAllCategories() {
      console.log('Pokusavam da uzmem kategorije');
      const data = await this.categoryService.getMainCategories();
      return data;
  }

}
