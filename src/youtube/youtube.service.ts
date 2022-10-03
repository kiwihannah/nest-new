import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';
import { Repository } from 'typeorm';
import ytdl from 'ytdl-core';
import { CreateYoutubeDto } from './dto/create-youtube.dto';
import { UpdateYoutubeDto } from './dto/update-youtube.dto';
import { Youtube } from './entities/youtube.entity';
import * as fs from 'fs';

@Injectable()
export class YoutubeService {
  constructor(@InjectRepository(Youtube) private youtubeRepository: Repository<Youtube>, @InjectFirebaseAdmin() private firebase: FirebaseAdmin) {}
  private bucket = this.firebase.storage.bucket(process.env.STORAGE_BUCKET);

  async create(url: string) {
    // 2. Download in local storage
    const savedYoutubeInfo: Youtube = await this.youtubeRepository.save({ url });
    ytdl(url).pipe(fs.createWriteStream('video.mp4'));

    // 3. Upload to GCS storage
    const ref = `uuid-sample/youtube/${savedYoutubeInfo.id}`;
    this.bucket.upload(ref);

    return savedYoutubeInfo;
  }

  findAll() {
    return `This action returns all youtube`;
  }

  findOne(id: number) {
    return `This action returns a #${id} youtube`;
  }

  update(id: number, updateYoutubeDto: UpdateYoutubeDto) {
    return `This action updates a #${id} youtube`;
  }

  remove(id: number) {
    return `This action removes a #${id} youtube`;
  }
}
