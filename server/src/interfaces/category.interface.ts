import { Document } from 'mongoose';

export interface CategoryInterface extends Document {
  readonly name: string;
  readonly parent: object;
}
