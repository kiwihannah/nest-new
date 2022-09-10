import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') userId: number) {
    return this.userService.findOne(userId);
  }

  @Patch(':id')
  update(@Param('id') userId: number, @Body() dto: UpdateUserDto) {
    return this.userService.update(userId, dto);
  }

  @Delete(':id')
  remove(@Param('id') userId: number) {
    return this.userService.remove(userId);
  }
}
