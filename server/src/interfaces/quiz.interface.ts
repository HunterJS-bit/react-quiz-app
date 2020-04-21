import { Document } from 'mongoose';

export interface QuizInterface extends Document {
  readonly name: string;
  readonly category: number;
}
