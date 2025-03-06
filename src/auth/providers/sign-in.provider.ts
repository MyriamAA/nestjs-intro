import {
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { SignInDto } from '../dtos/signin.dto';
import { UsersService } from 'src/users/providers/users.service';
import { HashingProvider } from './hashing.provider';

@Injectable()
export class SignInProvider {
  constructor(
    /**
     * Inject usersService
     */
    @Inject(forwardRef(() => UsersService)) // since auth module and users module have a circular dependency, add the forwardRef
    private readonly usersService: UsersService,

    /**
     * Inject hashingProvider
     */
    private readonly hashingProvider: HashingProvider,
  ) {}
  public async signIn(signInDto: SignInDto) {
    // Find the user using email ID
    // Throw an exception if user's not found
    const user = await this.usersService.findOneByEmail(signInDto.email);

    // Compare password to the hash

    let isEqual: boolean = false;

    try {
      isEqual = await this.hashingProvider.comparePassword(
        signInDto.password,
        user.password,
      );
    } catch (error) {
      throw new RequestTimeoutException(error, {
        description: 'Could not compare passwords',
      });
    }

    if (!isEqual) {
      throw new UnauthorizedException('Incorrect password');
    }
    // Send confirmation

    return true;
  }
}
