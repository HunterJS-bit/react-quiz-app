import { Document } from 'mongoose';

export interface QuestionInterface extends Document {
  readonly question: string;
  readonly image: string | null;
  readonly options: [string];
  readonly answers: [number];
  readonly position: number;
}
