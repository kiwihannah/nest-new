import { IsString, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'books' })
export class Book {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsString()
  @Column()
  title: string;

  @ApiProperty()
  @IsString()
  @Column()
  author: string;

  @ApiProperty()
  @IsDate()
  @Column({
    name: 'rent_time',
    type: 'timestamp',
    nullable: true,
  })
  rentTime: Date;

  @ApiProperty()
  @IsString()
  @Column()
  key: string;

  @ApiProperty()
  @IsDate()
  @Column({
    name: 'create_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;

  @ApiProperty()
  @IsDate()
  @Column({
    name: 'update_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  updateTime: Date;

  // @ManyToOne(() => User, (user) => user.id)
  // user: User;
}
