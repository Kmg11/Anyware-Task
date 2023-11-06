import {
  IsOptional,
  MinLength,
  MaxLength,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { AnnouncementDocumentType } from '../schemas';

export class UpdateAnnouncementDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(300)
  @IsOptional()
  description: AnnouncementDocumentType['description'];

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  @IsOptional()
  createdBy: AnnouncementDocumentType['createdBy'];

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(100)
  @IsOptional()
  department: AnnouncementDocumentType['department'];
}
