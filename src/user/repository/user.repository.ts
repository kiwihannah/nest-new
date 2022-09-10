import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-User.dto';
import { User } from '../entities/User.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from '../dto/update-User.dto';

@Injectable()
export class UserRepository extends Repository<User> {
  async findAll(): Promise<User[]> {
    return await this.find();
  }

  async findOnebyId(userId: number): Promise<User> {
    return await this.findOneBy({ id: userId });
  }

  async findOneByIdAndUpdate(
    userId: number,
    dto: UpdateUserDto,
  ): Promise<void> {
    await this.update(userId, {
      password: dto.password,
    });
    return;
  }

  async createOne(dto: CreateUserDto): Promise<CreateUserDto> {
    return await this.create(dto);
  }

  async deleteOneById(userId: number): Promise<void> {
    await this.deleteOneById(userId);
    return;
  }
}
