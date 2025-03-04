import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PaginationModule } from './common/pagination/pagination.module';
import appConfig from './config/app.config'; // Importing the default app configuration
import databaseConfig from './config/database.config';
import environmentValidation from './config/environment.validation';

/**
 * The AppModule is the root module of the NestJS application.
 * It is responsible for bootstrapping and organizing all the other modules.
 * It includes various modules such as Users, Posts, Auth, Tags, and MetaOptions.
 * It also sets up configuration and database connections.
 */
const ENV = process.env.NODE_ENV;

// Run this in cmd pg_ctl start -D "C:\users\mfabouatmeh\Desktop\CodesDar\more\Postgre\data"

/**
 * The main module of the application, which imports other feature modules
 * and sets up necessary configurations and database connections.
 *
 * @module AppModule
 */
@Module({
  imports: [
    /**
     * UsersModule: Provides user-related functionality such as user management.
     */
    UsersModule,

    /**
     * PostsModule: Handles all functionality related to posts.
     */
    PostsModule,

    /**
     * AuthModule: Handles authentication logic, such as login and token generation.
     */
    AuthModule,

    /**
     * ConfigModule: Loads environment variables and application-specific configurations.
     * It also validates the configurations using environmentValidation schema.
     */
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      load: [appConfig, databaseConfig],
      validationSchema: environmentValidation,
    }),

    /**
     * TypeOrmModule: Configures PostgreSQL database connection using TypeORM.
     * Database configurations are dynamically fetched from ConfigService.
     */
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Makes ConfigService available
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        // entities: [User],
        autoLoadEntities: configService.get('database.autoLoadEntities'),
        synchronize: configService.get('database.synchronize'), // If this setting is set to false, we would have to manually perform migrations
        port: configService.get('database.port'),
        username: configService.get('database.user'),
        password: configService.get('database.pass'),
        host: configService.get('database.host'),
        database: configService.get('database.name'),
      }),
    }),

    /**
     * TagsModule: Handles the management of tags for posts or other entities.
     */
    TagsModule,

    /**
     * MetaOptionsModule: Deals with metadata options for various entities in the app.
     */
    MetaOptionsModule,

    PaginationModule,
  ],

  /**
   * The controllers that are responsible for handling incoming requests.
   * Here, the main controller is AppController.
   */
  controllers: [AppController],

  /**
   * The providers that are used to provide business logic and service-related functionality.
   * In this case, AppService is used to return the 'Hello World' string.
   */
  providers: [AppService],
})
export class AppModule {}
