import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { isEmpty } from 'class-validator';
import { DeleteResult } from 'typeorm';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@ApiTags('books')
@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@Body() dto: CreateBookDto, @UploadedFile() file: Express.Multer.File): Promise<CreateBookDto> {
    const uploadedBook = await this.bookService.upload(dto, file);
    if (isEmpty(uploadedBook)) {
      throw new BadRequestException('ERR_BAD_REQUEST', 'book upload failed');
    }

    return uploadedBook;
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
  async update(@Param('id') bookId: number, @Body() title: string, author: string): Promise<Book> {
    const book = await this.bookService.findOne(bookId);

    if (!book) {
      throw { error: 'book is not exist' };
    }

    const dto: UpdateBookDto = {
      title,
      author,
    };

    return await this.bookService.update(bookId, dto);
  }

  @Delete(':id')
  async remove(@Param('id') bookId: number): Promise<DeleteResult> {
    const book = await this.bookService.findOne(bookId);

    if (!book) {
      throw { error: 'book is not exist' };
    }

    return await this.bookService.remove(bookId);
  }
}
