import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('login')
  async login(@Body() authLoginDto: AuthLoginDto) {
    return this.authService.login(authLoginDto);
  }
  @Post('signup')
  @ApiResponse({
    status: 201,
    description: 'New user has been created. Return User object',
    type: User,
  })
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async test() {
    return 'Success!';
  }
}
