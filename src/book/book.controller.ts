import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() dto: CreateBookDto): Promise<CreateBookDto> {
    return await this.bookService.create(dto);
  }

  @Get()
  async findAll(): Promise<Book[]> {
    return await this.bookService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') bookId: number): Promise<Book> {
    return await this.bookService.findOne(bookId);
  }

  @Patch(':id')
  async update(
    @Param('id') bookId: number,
    @Body() dto: UpdateBookDto,
  ): Promise<void> {
    const book = await this.bookService.findOne(bookId);
    if (!book) {
      throw { error: 'book is not exist' };
    }
    return await this.bookService.update(bookId, dto);
  }

  @Delete(':id')
  async remove(@Param('id') bookId: number): Promise<void> {
    const book = await this.bookService.findOne(bookId);
    if (!book) {
      throw { error: 'book is not exist' };
    }
    return await this.bookService.remove(bookId);
  }
}
