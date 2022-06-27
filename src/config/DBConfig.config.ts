import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { entities } from 'src/entities';

export function DBConfig(configService: ConfigService): TypeOrmModuleOptions {
  return {
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASENAME'),
    entities: entities,
    synchronize: true,
    migrations: ['dist/migrations/*{.ts,.js}'],
    migrationsTableName: 'migrations_history',
    migrationsRun: true,
  };
}
