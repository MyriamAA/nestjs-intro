import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DataResponseInterceptor } from './common/interceptors/data-response/data-response.interceptor';
import { config } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
// Use https://jsdoc.app/about-getting-started for more details on how to document (for compodoc)

/**
 * Bootstrap function for initializing and running the NestJS application.
 * This function sets up the app with global validation pipes and Swagger API documentation.
 */
async function bootstrap() {
  // Create a new NestJS application instance using the root module (AppModule)
  const app = await NestFactory.create(AppModule);

  // Add the global validation pipe for input validation and transformation (instead of doing it per controller)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strips properties that are not defined in DTOs
      forbidNonWhitelisted: true, // Throws an error if non-whitelisted properties are provided
      transform: true, // Automatically transforms payloads to DTO types
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // When the transformOptions flag is set to true, the validation pipes takes care of validation so we dont have to add decorators:
  // @Type(() => Number)

  // Swagger API documentation configuration
  const swaggerConfig = new DocumentBuilder()
    .setTitle('NestJS Masterclass - Blog app API') // API title
    .setDescription('Use the base API URL as http://localhost:3000') // API description
    .setTermsOfService('http://localhost:3000/terms-of-service') // Link to Terms of Service
    .setLicense(
      'MIT License',
      'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt', // License info and link
    )
    .addServer(
      'http://localhost:3000',
    ) /* Base API URL, many servers can be added */
    .setVersion('1.0') // API version
    .build(); // Build the Swagger config

  // Create the Swagger document using the app and config
  const document = SwaggerModule.createDocument(app, swaggerConfig);

  // Setup Swagger at the '/api' endpoint for easier API exploration

  // First argument is the path
  // Second argument is the app
  // Third is the document
  SwaggerModule.setup('api', app, document);

  // Setup the aws sdk used uploading the files to aws s3 bucket

  // Extra AWS
  const configService = app.get(ConfigService);

  config.update({
    credentials: {
      accessKeyId: configService.get('appConfig.awsAccessKeyId'),
      secretAccessKey: configService.get('appConfig.awsSecretAccessKey'),
    },
    region: configService.get('appConfig.awsRegion'),
  });
  // Enable CORS
  app.enableCors();

  console.log(configService.get('appConfig'));
  // Start the application, listening on the specified port (default is 3000)
  await app.listen(process.env.PORT ?? 3000);
}

// Call the bootstrap function to initialize the app
bootstrap();

// add this in .env.development
// JWT_REFRESH_TOKEN_TTL = 86400;
