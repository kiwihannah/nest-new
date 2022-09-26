import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { storage } from '../common/firebase/initialize-app';
import { ref, uploadBytes } from 'firebase/storage';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>, // private readonly storageService: StorageService,
  ) {}

  async upload(dto: CreateBookDto, file: Express.Multer.File): Promise<CreateBookDto> {
    const coverImagesRef = ref(storage, 'images/' + new Date().toISOString());

    uploadBytes(coverImagesRef, file.buffer).then((snapshot) => {
      console.log(snapshot.metadata);
    });

    return await this.bookRepository.save(dto);
  }

  async create(dto: CreateBookDto): Promise<CreateBookDto> {
    return await this.bookRepository.save(dto);
  }

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async findOne(bookId: number): Promise<Book> {
    return await this.bookRepository.findOneBy({ id: bookId });
  }

  async update(bookId: number, dto: UpdateBookDto): Promise<Book> {
    const book: Book = await this.bookRepository.findOneBy({ id: bookId });
    book.title = dto.title;
    book.author = dto.author;
    return await this.bookRepository.save(book);
  }

  async remove(bookId: number): Promise<DeleteResult> {
    return await this.bookRepository.delete({ id: bookId });
  }
}
