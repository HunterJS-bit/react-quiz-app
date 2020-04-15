import { Document } from 'mongoose';

export interface QuestionInterface extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
