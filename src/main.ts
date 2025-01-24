import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Add the validations everywhere instead of doing it per controller
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Swagger config

  const config = new DocumentBuilder().setVersion('1.0').build();

  // Instantiate a document object

  const document = SwaggerModule.createDocument(app, config);

  // First argument is the path
  // Second argument is the app
  // Third is the document
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
