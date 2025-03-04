import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * AppController is the controller responsible for handling incoming HTTP requests.
 * It uses AppService to return the "Hello World!" string.
 *
 * @module AppController
 */
@Controller()
export class AppController {
  /**
   * Injects the AppService to access its methods and return data.
   *
   * @param appService - Instance of AppService to handle the business logic.
   */
  constructor(private readonly appService: AppService) {}

  /**
   * Handles the GET request for the root endpoint ('/').
   * It uses the AppService to get the 'Hello World!' string and return it to the client.
   *
   * @returns string - The greeting message.
   * @example 'Hello World!'
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
