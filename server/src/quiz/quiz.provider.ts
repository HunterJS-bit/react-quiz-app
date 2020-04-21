import { Connection } from 'mongoose';
import { QuizSchema } from '../models/quiz.schema';

export const quizProviders = [
  {
    provide: 'QUIZ_MODEL',
    useFactory: (connection: Connection) => connection.model('Quiz', QuizSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
