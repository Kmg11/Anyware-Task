import {
  MinLength,
  MaxLength,
  IsNotEmpty,
  IsString,
  IsDate,
  MinDate,
} from 'class-validator';
import { QuizDocumentType } from '../schemas';

export class CreateQuizDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(300)
  course: QuizDocumentType['course'];

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  topic: QuizDocumentType['topic'];

  @IsDate()
  @IsNotEmpty()
  @MinDate(new Date(Date.now() + 86400000))
  dueTo: QuizDocumentType['dueTo'];
}
