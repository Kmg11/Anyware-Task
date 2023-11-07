import {
  MinLength,
  MaxLength,
  IsNotEmpty,
  IsString,
  IsDate,
  MinDate,
} from 'class-validator';
import { QuizDocumentType } from '../schemas';
import { Type } from 'class-transformer';

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
  @Type(() => Date)
  @IsNotEmpty()
  @MinDate(new Date())
  dueTo: QuizDocumentType['dueTo'];
}
