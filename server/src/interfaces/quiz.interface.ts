import { Document } from 'mongoose';
import { QuestionInterface } from './question.interface';

export interface QuizInterface extends Document {
  readonly name: string;
  readonly slug: string;
  readonly category: number;
  readonly questions: [any];
}
