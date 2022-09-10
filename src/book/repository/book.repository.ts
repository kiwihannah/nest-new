import { Injectable } from '@nestjs/common';
import { CreateBookDto } from '../dto/create-book.dto';
import { Book } from '../entities/book.entity';
import { Repository } from 'typeorm';
import { UpdateBookDto } from '../dto/update-book.dto';
@Injectable()
export class BookRepository extends Repository<Book> {
  async findAll(): Promise<Book[]> {
    return await this.find();
  }

  async findOnebyId(bookId: number): Promise<Book> {
    return await this.findOneBy({ id: bookId });
  }

  async findOneByIdAndUpdate(
    bookId: number,
    dto: UpdateBookDto,
  ): Promise<void> {
    await this.update(bookId, {
      title: dto.title,
      author: dto.author,
    });
    return;
  }

  async createOne(dto: CreateBookDto): Promise<CreateBookDto> {
    return await this.create(dto);
  }

  async deleteOneById(bookId: number): Promise<void> {
    await this.deleteOneById(bookId);
    return;
  }
}
