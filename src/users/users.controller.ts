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
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

// To make parameters optional, use the ? operator
@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(
    // Injecting user service
    private readonly usersService: UsersService,
  ) {}

  /**
   * Retrieves a user.
   * @param id - The ID of the user.
   * @returns The user details.
   */
  @Get('')
  @ApiOperation({ summary: 'Retrieves a user' })
  @ApiParam({
    name: 'id',
    type: 'string',
    required: true,
    description: 'User ID',
  })
  @ApiResponse({ status: 200, description: 'Returns the user' })
  public getUser(@Query('id') id: string) {
    return this.usersService.findOneById(parseInt(id));
  }

  @Get('')
  @ApiOperation({
    summary: 'Fetches a list of registered users on the application',
  })
  // We can add multiple api response
  @ApiResponse({
    status: 200,
    description: 'Users fetched successfully based on the query',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'The number of entries returned per query',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description:
      'The position of the page number that you want the API to return',
    example: 1,
  })
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
  ) {
    return this.usersService.createUser(createUserDto);
  }
  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
