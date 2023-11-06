import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Announcement } from './schemas';
import { Model } from 'mongoose';
import { CreateAnnouncementDto, UpdateAnnouncementDto } from './dto';

@Injectable()
export class AnnouncementService {
  constructor(
    @InjectModel(Announcement.name)
    private announcementModel: Model<Announcement>,
  ) {}

  async getAnnouncements() {
    const announcements = await this.announcementModel.find({});

    return { announcements };
  }

  async createAnnouncement(createAnnouncementDto: CreateAnnouncementDto) {
    const announcement = await this.announcementModel.create({
      description: createAnnouncementDto.description,
      createdBy: createAnnouncementDto.createdBy,
      department: createAnnouncementDto.department,
    });

    return { announcement };
  }

  async updateAnnouncement(
    announcementId: string,
    updateAnnouncementDto: UpdateAnnouncementDto,
  ) {
    const announcement = await this.announcementModel.findById(announcementId);
    if (!announcement) throw new NotFoundException('Announcement not found');

    const updatedAnnouncement = await this.announcementModel.findByIdAndUpdate(
      announcementId,
      {
        $set: {
          description: updateAnnouncementDto.description,
          createdBy: updateAnnouncementDto.createdBy,
          department: updateAnnouncementDto.department,
        },
      },
      { new: true },
    );

    return { updatedAnnouncement };
  }

  async deleteAnnouncement(announcementId: string) {
    const announcement = await this.announcementModel.findById(announcementId);
    if (!announcement) throw new NotFoundException('Announcement not found');

    await this.announcementModel.findByIdAndDelete(announcementId);

    return { message: 'Announcement deleted successfully' };
  }
}
