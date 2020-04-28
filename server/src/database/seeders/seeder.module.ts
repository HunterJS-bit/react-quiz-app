import { Module } from '@nestjs/common';
import { Seeder } from './seeder';
import { CategoryModule } from 'src/category/category.module';


@Module({
  imports: [CategoryModule],
  providers: [Seeder],
})
export class SeederModule {}