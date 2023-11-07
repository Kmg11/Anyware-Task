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
import { Type } from 'class-transformer';

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
  @Type(() => Date)
  @IsNotEmpty()
  @MinDate(new Date())
  @IsOptional()
  dueTo?: QuizDocumentType['dueTo'];
}
