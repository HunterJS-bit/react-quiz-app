import { Injectable, Inject } from '@nestjs/common';
import { QuizInterface } from '../interfaces/quiz.interface';
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CategoryService } from '../category/category.service';
import pdfBuilder from './utils/pdfBilder';

@Injectable()
export class QuizService {
  constructor(
    @InjectModel('Quiz') private quizModel: Model<QuizInterface>,
    private configService: ConfigService,
    private readonly categoryService: CategoryService,
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

  async loadQuestions(id: number) {
    const data = await this.quizModel.findById(id);
        // todo add aggregation func & fetch all data from db
    const totalPoints = data.questions.map((e) => e.points).reduce((acumulator, value) => acumulator + value);

    return {
        totalPoints: totalPoints,
        questions: data.questions
    };
  }

  async paginateQuestions(category, slug) {
    const { _id: id } = await this.categoryService.findByName(category);
    return this.quizModel.findOne({ category: id, slug: slug });
  }
  async createMultiple(quizData) {
    return this.quizModel.insertMany(quizData);
  }
  async removeAll() {
    return this.quizModel.deleteMany({});
  }

  async createPDF(category, slug) {
    // const data = await this.quizModel.findById(id);
    const { _id: id } = await this.categoryService.findByName(category);
    const data = await this.quizModel.findOne({ category: id, slug: slug });
    const pdf = await pdfBuilder(data);
    return pdf;
  }
}
