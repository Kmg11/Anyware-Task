import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { AnnouncementModule } from './announcement/announcement.module';
import { QuizModule } from './quiz/quiz.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    AuthModule,
    AnnouncementModule,
    QuizModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
