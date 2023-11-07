import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { QuizService } from './quiz.service';
import { CreateQuizDto, UpdateQuizDto } from './dto';

@UseGuards(JwtGuard)
@Controller('quizzes')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get()
  getQuizzes() {
    return this.quizService.getQuizzes();
  }

  @Post()
  createQuiz(@Body() createQuizDto: CreateQuizDto) {
    return this.quizService.createQuiz(createQuizDto);
  }

  @Patch(':quizId')
  updateQuiz(
    @Param('quizId') quizId: string,
    @Body() updateQuizDto: UpdateQuizDto,
  ) {
    return this.quizService.updateQuiz(quizId, updateQuizDto);
  }

  @Delete(':quizId')
  deleteQuiz(@Param('quizId') quizId: string) {
    return this.quizService.deleteQuiz(quizId);
  }
}
