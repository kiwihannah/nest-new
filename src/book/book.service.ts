import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookRepository } from './repository/book.repository';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async create(dto: CreateBookDto) {
    return await this.bookRepository.createOne(dto);
  }

  async findAll() {
    return await this.bookRepository.findAll();
  }

  async findOne(bookId: number) {
    return await this.bookRepository.findOnebyId(bookId);
  }

  async update(bookId: number, dto: UpdateBookDto) {
    return await this.bookRepository.update(bookId, dto);
  }

  async remove(bookId: number) {
    return await this.bookRepository.delete(bookId);
  }
}
