import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { BookRepository } from './repository/book.repository';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async create(dto: CreateBookDto): Promise<CreateBookDto> {
    return await this.bookRepository.createOne(dto);
  }

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.findAll();
  }

  async findOne(bookId: number): Promise<Book> {
    return await this.bookRepository.findOnebyId(bookId);
  }

  async update(bookId: number, dto: UpdateBookDto): Promise<void> {
    return await this.bookRepository.findOneByIdAndUpdate(bookId, dto);
  }

  async remove(bookId: number): Promise<void> {
    return await this.bookRepository.deleteOneById(bookId);
  }
}
