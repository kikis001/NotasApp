import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/user.dto';
import { UsersService } from '../services/users.service';
import { Role } from 'src/auth/models/roles.model';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  get() {
    return this.usersService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.usersService.getOne(id);
  }

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.usersService.create(body, Role.CLIENT);
  }

  @Post('/admin')
  createAdmin(@Body() body: CreateUserDto) {
    return this.usersService.create(body, Role.ADMIN);
  }
}
