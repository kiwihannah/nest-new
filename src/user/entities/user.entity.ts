import { IsString, IsDate, IsInt } from 'class-validator';
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
  @IsDate()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ApiProperty()
  @IsDate()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @OneToMany(() => Book, (Book) => Book.user)
  book: Book[];
}
