import { Module } from '@nestjs/common';
import { YoutubeService } from './youtube.service';
import { YoutubeController } from './youtube.controller';
import { Youtube } from './entities/youtube.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Youtube])],
  controllers: [YoutubeController],
  providers: [YoutubeService],
})
export class YoutubeModule {}
