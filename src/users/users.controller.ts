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
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';

// To make parameters optional, use the ? operator
@Controller('users')
export class UsersController {
  @Get('/:id?')
  public getUsers(
    @Param() getUserParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(getUserParamDto);
    return 'You sent a get req to users endpoint';
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
}
