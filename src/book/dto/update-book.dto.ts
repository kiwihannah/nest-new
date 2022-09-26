import { PartialType, PickType } from '@nestjs/swagger';
import { Book } from '../entities/book.entity';

export class UpdateBookDto extends PartialType(Book) {}
