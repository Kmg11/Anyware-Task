import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Quiz } from './schemas';
import { Model } from 'mongoose';
import { CreateQuizDto, UpdateQuizDto } from './dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectModel(Quiz.name)
    private quizModel: Model<Quiz>,
  ) {}

  async getQuizzes() {
    const quizzes = await this.quizModel.find({});

    return { quizzes };
  }

  async createQuiz(createQuizDto: CreateQuizDto) {
    const quiz = await this.quizModel.create({
      course: createQuizDto.course,
      topic: createQuizDto.topic,
      dueTo: createQuizDto.dueTo,
    });

    return { quiz };
  }

  async updateQuiz(quizId: string, updateQuizDto: UpdateQuizDto) {
    const quiz = await this.quizModel.findById(quizId);
    if (!quiz) throw new NotFoundException('Quiz not found');

    const updatedQuiz = await this.quizModel.findByIdAndUpdate(
      quizId,
      {
        $set: {
          course: updateQuizDto.course,
          topic: updateQuizDto.topic,
          dueTo: updateQuizDto.dueTo,
        },
      },
      { new: true },
    );

    return { updatedQuiz };
  }

  async deleteQuiz(quizId: string) {
    const quiz = await this.quizModel.findById(quizId);
    if (!quiz) throw new NotFoundException('Quiz not found');

    await this.quizModel.findByIdAndDelete(quizId);

    return { message: 'Quiz deleted successfully' };
  }
}
