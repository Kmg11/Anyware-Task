import { MinLength, MaxLength, IsNotEmpty, IsString } from 'class-validator';
import { AnnouncementDocumentType } from '../schemas';

export class CreateAnnouncementDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(300)
  description: AnnouncementDocumentType['description'];

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  createdBy: AnnouncementDocumentType['createdBy'];

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(100)
  department: AnnouncementDocumentType['department'];
}
