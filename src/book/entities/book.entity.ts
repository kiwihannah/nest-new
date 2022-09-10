import { IsString, IsDate, IsInt, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Entity({ name: 'books', synchronize: true })
export class Book {
  @ApiProperty()
  @IsInt()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsString()
  @Column()
  title: string;

  @ApiProperty()
  @IsInt()
  @Column()
  author: string;

  @ApiProperty()
  @IsBoolean()
  @Column()
  isAvailable: boolean;

  @ApiProperty()
  @IsDate()
  @Column()
  createdAt: Date;

  @ApiProperty()
  @IsDate()
  @Column()
  UpdatedAt: Date;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
