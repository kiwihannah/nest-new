import { IsString, IsDate, IsInt, IsBoolean } from 'class-validator';
import { Book } from '../../book/entities/book.entity';
import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';

@Entity({ name: 'users', synchronize: true })
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsString()
  @Column()
  email: string;

  @ApiProperty()
  @IsInt()
  @Column()
  password: string;

  @ApiProperty()
  @IsBoolean()
  @Column()
  createdAt: boolean;

  @ApiProperty()
  @IsDate()
  @Column()
  updatedAt: Date;

  @OneToMany(() => Book, (Book) => Book.user)
  book: Book[];
}
