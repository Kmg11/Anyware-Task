import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnnouncementDocumentType = HydratedDocument<
  Announcement & {
    createdAt: Date;
    updatedAt: Date;
  }
>;

@Schema({ timestamps: true })
export class Announcement {
  @Prop({ required: true, minlength: 1, maxlength: 300 })
  description: string;

  @Prop({ required: true, minlength: 1, maxlength: 50 })
  createdBy: string;

  @Prop({ required: true, minlength: 1, maxlength: 100 })
  department: string;
}

export const AnnouncementSchema = SchemaFactory.createForClass(Announcement);
