import { Controller, Post, Get } from '@nestjs/common';

@Controller('category')
export class CategoryController {

  @Post()
  async createCategory(category) {

  }

  @Get()
  async getAllCategories() {

  }
}
