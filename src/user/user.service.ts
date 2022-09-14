import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    return this.userRepository.save(dto);
  }

  async findOne(userId: number): Promise<User> {
    return this.userRepository.findOneBy({ id: userId });
  }

  async update(userId: number, dto: UpdateUserDto): Promise<User> {
    const user: User = await this.userRepository.findOneBy({ id: userId });
    user.password = dto.password;
    return await this.userRepository.save(user);
  }

  async remove(userId: number): Promise<DeleteResult> {
    return this.userRepository.delete(userId);
  }
}
