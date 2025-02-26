import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  ParseIntPipe,
  DefaultValuePipe,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateManyUsersDto } from './dtos/create-many-users.dto';

// To make parameters optional, use the ? operator
@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(
    /**
     * Injecting user service
     */
    private readonly usersService: UsersService,
  ) {}

  /**
   * Retrieves a user by ID from query parameter (e.g., `id=5`).
   * @param id - The ID of the user to fetch.
   * @returns The user details.
   */
  @Get()
  @ApiOperation({ summary: 'Fetch a single user by ID' })
  @ApiQuery({
    name: 'id',
    type: 'string',
    required: true,
    description: 'The ID of the user',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns the user details',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  public getUserById(@Query('id') id: string) {
    const userId = parseInt(id, 10);
    if (isNaN(userId)) {
      return { error: 'Invalid ID format' };
    }
    return this.usersService.findOneById(userId);
  }

  /**
   * Retrieves a list of users with pagination.
   */
  @Get('/:id?')
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

  /**
   * Creates a new user.
   * @param createUserDto - The data to create a new user.
   * @returns The created user.
   */
  @Post()
  public createUsers(
    // Without the global validation
    // @Body(new ValidationPipe()) createUserDto: CreateUserDto,

    // With
    @Body() createUserDto: CreateUserDto,
  ) {
    return this.usersService.createUser(createUserDto);
  }

  /**
   * Creates many user.
   * @param createManyUsersDto - The new users.
   * @returns The created user.
   */
  @Post('create-many')
  public createManyUsers(@Body() createManyUsersDto: CreateManyUsersDto) {
    return this.usersService.createMany(createManyUsersDto);
  }

  /**
   * Patches user information.
   * @param patchUserDto - The data to update the user.
   * @returns The updated user data.
   */
  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
