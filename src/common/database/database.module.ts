import { Module } from '@nestjs/common';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
import { ConfigService, ConfigModule } from '@nestjs/config'; // Import ConfigService
import { DbMigrationService } from './db-migration.service';
@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [DbMigrationService],
})
export class DatabaseModule {
  static forFeature(models: ModelDefinition[]) {
    return MongooseModule.forFeature(models);
  }
}
//@Module({imports:[MongooseModule.forRootAsync({useFactory:(configService:ConfigService)=>({uri:configService.get('MONGODB_URI')}),inject:[ConfigService]})],controllers:[AppController],providers:[AppService]})
