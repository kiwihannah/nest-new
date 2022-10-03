import { PickType } from '@nestjs/swagger';
import { Youtube } from '../entities/youtube.entity';

export class CreateYoutubeDto extends PickType(Youtube, ['url'] as const) {}
