import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { DBConfig } from './config/DBConfig.config';
import { WorkoutModule } from './workout/workout.module';
import { AuthModule } from './auth/auth.module';
import { ExerciceModule } from './exercices/exercices.module';
import { MusclesModule } from './muscles/muscles.module';
import { EquipementsModule } from './equipements/equipements.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) =>
        DBConfig(configService),
      inject: [ConfigService],
    }),
    UsersModule,
    WorkoutModule,
    AuthModule,
    ExerciceModule,
    MusclesModule,
    EquipementsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
