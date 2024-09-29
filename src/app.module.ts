import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { appConfig } from './config/app.config';
import { dbConfig } from './config/db.config';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
      ConfigModule.forRoot({
        isGlobal: true,
        load: [appConfig, dbConfig],
      }),
      SequelizeModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: (config: ConfigService) => ({
          dialect: 'postgres',
          host: config.get<string>('database.host'),
          port: parseInt(config.get<string>('database.port'), 10),
          username: config.get<string>('database.db_user'),
          password: config.get<string>('database.password'),
          database: config.get<string>('database.dbName'),
          sync: { alter: true, force: false },
          models: [],
        }),
        inject: [ConfigService],
      })
    ]
})
export class AppModule { }
