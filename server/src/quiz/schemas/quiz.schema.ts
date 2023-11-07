import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuizDocumentType = HydratedDocument<
  Quiz & {
    createdAt: Date;
    updatedAt: Date;
  }
>;

@Schema({ timestamps: true })
export class Quiz {
  @Prop({ required: true, minlength: 1, maxlength: 100 })
  course: string;

  @Prop({ required: true, minlength: 1, maxlength: 100 })
  topic: string;

  // * Define the 'dueTo' field with a minimum value of tomorrow
  @Prop({ required: true, min: Date.now() })
  dueTo: Date;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
