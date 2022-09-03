import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  create(dto: CreateUserDto) {
    return this.userRepository.create(dto);
  }

  findOne(_id: ObjectId) {
    return this.userRepository.findOne(_id);
  }

  update(_id: ObjectId, dto: UpdateUserDto) {
    return this.userRepository.update(_id);
  }

  remove(_id: ObjectId) {
    return this.userRepository.delete(_id);
  }
}
