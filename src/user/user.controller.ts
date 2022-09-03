import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ObjectId } from 'mongoose';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') _id: ObjectId) {
    return this.userService.findOne(_id);
  }

  @Patch(':id')
  update(@Param('id') _id: ObjectId, @Body() dto: UpdateUserDto) {
    return this.userService.update(_id, dto);
  }

  @Delete(':id')
  remove(@Param('id') _id: ObjectId) {
    return this.userService.remove(_id);
  }
}
