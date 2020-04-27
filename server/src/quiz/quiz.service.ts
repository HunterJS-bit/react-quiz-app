import { Injectable, Inject } from '@nestjs/common';
import { QuizInterface } from '../interfaces/quiz.interface';
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';

@Injectable()
export class QuizService {
  constructor(
    @Inject('QUIZ_MODEL')
    private quizModel: Model<QuizInterface>,
    private configService: ConfigService,
  ) {}

  async createQuiz(quizDTO) {
    return this.quizModel.create(quizDTO);
  }

  async getQuizTestsPerCategory(catID: number) {
    return this.quizModel.find({ 'category': catID }).sort({ name: 1 });
  }

  async searchQuizes(searchParam: string) {
    return this.quizModel.find({ 'name': { '$regex' : searchParam, '$options' : 'i' } }).sort({ name: 1 });
  }

  async embedQuestions(question, image) {

    const SERVER_URL = this.configService.get<string>('server_url');
    let imagePath = null;
    if (image) {
      // if image is uploaded, save image path in DB, else will be NULL
      imagePath = `${SERVER_URL}${image.path}`;
    }
    const options = question.options.map(e => e.name);
    const quizCategory = question.quizCategory;
    const quizCat = quizCategory[0];
    const questionToCreate = {
      question: question.question,
      options: options,
      image: imagePath,
      answers: [1],
      position: quizCat.position
    };
    console.log('Question', questionToCreate);
    console.log('Quiz categoryyyy', quizCategory);

    const data = await this.quizModel.updateOne({ '_id': quizCat.id }, 
        { '$push': { 
            'questions': questionToCreate
        }});

    console.log('kreirano ', data, 'cat', quizCat.id);
  
  }
}
