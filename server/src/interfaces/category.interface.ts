import { Document } from 'mongoose';

export interface CategoryInterface extends Document {
  readonly _id: number,
  readonly name: string;
  readonly slug: string;
  readonly parent: object;
}
