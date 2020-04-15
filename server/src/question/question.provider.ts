import { Connection } from 'mongoose';
import { QuestionSchema } from '../models/question.schema';

export const questionProviders = [
  {
    provide: 'QUESTION_MODEL',
    useFactory: (connection: Connection) => connection.model('Question', QuestionSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
