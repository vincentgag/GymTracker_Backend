import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Retrieve user from ID',
    type: User,
  })
  show(@Param('id') id: string) {
    return this.usersService.showById(id);
  }
}
