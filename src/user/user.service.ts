import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  create(dto: CreateUserDto) {
    return this.userRepository.createOne(dto);
  }

  findOne(userId: number) {
    return this.userRepository.findOnebyId(userId);
  }

  update(userId: number, dto: UpdateUserDto) {
    return this.userRepository.findOneByIdAndUpdate(userId, dto);
  }

  remove(userId: number) {
    return this.userRepository.delete(userId);
  }
}
