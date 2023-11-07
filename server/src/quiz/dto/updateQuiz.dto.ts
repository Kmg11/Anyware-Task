import {
  MinLength,
  MaxLength,
  IsNotEmpty,
  IsString,
  IsDate,
  MinDate,
  IsOptional,
} from 'class-validator';
import { QuizDocumentType } from '../schemas';

export class UpdateQuizDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(300)
  @IsOptional()
  course?: QuizDocumentType['course'];

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  @IsOptional()
  topic?: QuizDocumentType['topic'];

  @IsDate()
  @IsNotEmpty()
  @MinDate(new Date(Date.now() + 86400000))
  @IsOptional()
  dueTo?: QuizDocumentType['dueTo'];
}
