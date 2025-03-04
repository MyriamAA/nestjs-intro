import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

/**
 * DTO class for creating a new user.
 * Contains validation rules for the first name, last name, email, and password.
 */
export class CreateUserDto {
  /**
   * The first name of the user.
   * Should be a string and cannot be empty.
   * The length should be between 3 and 96 characters.
   */
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  firstName: string;

  /**
   * The last name of the user (optional).
   * Should be a string with a length between 3 and 96 characters.
   */
  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(96)
  lastName?: string;

  /**
   * The email of the user.
   * Should be a valid email address and cannot be empty.
   * The length should be no more than 96 characters.
   */
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(96)
  email: string;

  /**
   * The password of the user.
   * Must be a string, at least 8 characters long, and include at least one letter, one number, and one special character.
   */
  @IsString()
  @IsNotEmpty()
  @MaxLength(96)
  @MinLength(8)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/, {
    message:
      'Minimum 8 chars, include at least one letter, one number, and one special character.',
  })
  password: string;
}
