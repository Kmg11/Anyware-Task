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
import { AnnouncementService } from './announcement.service';
import { CreateAnnouncementDto, UpdateAnnouncementDto } from './dto';

@UseGuards(JwtGuard)
@Controller('announcements')
export class AnnouncementController {
  constructor(private announcementService: AnnouncementService) {}

  @Get()
  getAnnouncements() {
    return this.announcementService.getAnnouncements();
  }

  @Post()
  createAnnouncement(@Body() createAnnouncementDto: CreateAnnouncementDto) {
    return this.announcementService.createAnnouncement(createAnnouncementDto);
  }

  @Patch(':announcementId')
  updateAnnouncement(
    @Param('announcementId') announcementId: string,
    @Body() updateAnnouncementDto: UpdateAnnouncementDto,
  ) {
    return this.announcementService.updateAnnouncement(
      announcementId,
      updateAnnouncementDto,
    );
  }

  @Delete(':announcementId')
  deleteAnnouncement(@Param('announcementId') announcementId: string) {
    return this.announcementService.deleteAnnouncement(announcementId);
  }
}
