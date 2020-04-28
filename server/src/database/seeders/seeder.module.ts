import { Module } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { databaseProviders } from '../database.providers';
import { Seeder } from './seeder';


@Module({
  providers: [...databaseProviders,  Seeder],
})
export class SeederModule {}