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
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateManyUsersDto } from './dtos/create-many-users.dto';
import { AccessTokenGuard } from 'src/auth/guards/access-token/access-token.guard';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { AuthType } from 'src/auth/enums/auth-type.enum';

/**
 * Controller for handling user-related requests.
 */
@Controller('users')
@ApiTags('Users')
// @UseGuards(AccessTokenGuard) // This would protect all APIs by forcing the user to be authenticated
export class UsersController {
  /**
   * Constructs the UsersController.
   * @param usersService - The service handling user operations.
   */
  constructor(private readonly usersService: UsersService) {}

  /**
   * Retrieves a user by ID from query parameters (e.g., `id=5`).
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
    description: 'User details retrieved successfully',
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  public getUserById(@Query('id') id: string) {
    const userId = parseInt(id, 10);
    if (isNaN(userId)) {
      return { error: 'Invalid ID format' };
    }
    return this.usersService.findOneById(userId);
  }

  /**
   * Retrieves a list of users with pagination.
   * @param getUserParamDto - DTO containing filter parameters.
   * @param limit - Number of users per page.
   * @param page - Page number.
   * @returns A list of users.
   */
  @Get('/:id?')
  @ApiOperation({
    summary: 'Fetch all registered users with optional pagination',
  })
  @ApiResponse({ status: 200, description: 'Users retrieved successfully' })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'The number of entries returned per query',
    example: 10,
  })
  @ApiQuery({ name: 'page', type: 'number', required: false, example: 1 })
  public getUsers(
    @Param() getUserParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(getUserParamDto, limit, page);
  }

  /**
   * Creates a new user.
   * @param createUserDto - Data required to create a user.
   * @returns The created user.
   */
  @Auth(AuthType.None)
  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  public createUser(
    // Without the global validation
    // @Body(new ValidationPipe()) createUserDto: CreateUserDto,

    // With
    @Body() createUserDto: CreateUserDto,
  ) {
    return this.usersService.createUser(createUserDto);
  }

  /**
   * Creates multiple users.
   * @param createManyUsersDto - The data to create multiple users.
   * @returns The created users.
   */
  @Post('create-many')
  public createManyUsers(@Body() createManyUsersDto: CreateManyUsersDto) {
    return this.usersService.createMany(createManyUsersDto);
  }

  /**
   * Updates user information.
   * @param patchUserDto - Data containing updates for the user.
   * @returns The updated user.
   */
  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
