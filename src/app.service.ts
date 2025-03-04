import { Injectable } from '@nestjs/common';

/**
 * AppService is a service that handles business logic related to the application.
 * Currently, it provides a simple 'Hello World' message.
 *
 * @module AppService
 */
@Injectable()
export class AppService {
  /**
   * Returns a 'Hello World!' string.
   *
   * @returns string - A simple greeting message.
   * @example 'Hello World!'
   */
  getHello(): string {
    return 'Hello World!';
  }
}
