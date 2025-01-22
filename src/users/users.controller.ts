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
} from '@nestjs/common';

// To make parameters optional, use the ? operator
@Controller('users')
export class UsersController {
  @Get('/:id?')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,

    @Query('limit', new DefaultValuePipe(1), ParseIntPipe) limit: number,
  ) {
    console.log(id);
    console.log(limit);

    return 'You sent a get req to users endpoint';
  }

  @Post()
  public createUsers(@Body() request: any, @Headers() headers: any) {
    console.log(request);
    console.log(headers);
    const { firstName } = request;
    console.log(firstName);
    return 'You sent a post req to users endpoint';
  }
}
