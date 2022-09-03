import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { User, UserDocument } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(_id: ObjectId): Promise<User> {
    return await this.userModel.findById(_id);
  }

  async update(_id: ObjectId): Promise<User> {
    return await this.userModel.findByIdAndUpdate(_id);
  }

  async create(dto: CreateUserDto): Promise<CreateUserDto> {
    return await this.userModel.create(dto);
  }

  async delete(_id: ObjectId): Promise<void> {
    await this.userModel.deleteOne(_id);
    return;
  }
}
