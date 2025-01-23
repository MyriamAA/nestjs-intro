/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Headers,
  Controller,
  Get,
  Param,
  Post,
  Query,
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';

// To make parameters optional, use the ? operator
@Controller('users')
export class UsersController {
  constructor(
    // Injecting user service
    private readonly usersService: UsersService,
  ) {}
  @Get('/:id?')
  public getUsers(
    @Param() getUserParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(getUserParamDto, limit, page);
  }

  @Post()
  public createUsers(
    // Without the global validation
    // @Body(new ValidationPipe()) createUserDto: CreateUserDto,

    // With
    @Body() createUserDto: CreateUserDto,
    @Headers() headers: any,
  ) {
    console.log(createUserDto);
    console.log(headers);
    const { firstName } = createUserDto;
    console.log(firstName);
    return 'You sent a post req to users endpoint';
  }
  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
