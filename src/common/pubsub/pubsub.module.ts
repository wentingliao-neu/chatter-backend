import { Global, Module } from '@nestjs/common';
import { PUB_SUB } from '../constants/injection.tokens';
import { PubSub } from 'graphql-subscriptions';
import { ConfigService } from '@nestjs/config';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import Redis from 'ioredis';
import { reviver } from './reviver';

@Global()
@Module({
  providers: [
    {
      provide: PUB_SUB,
      useFactory: (configService: ConfigService) => {
        if (configService.get('NODE_ENV') === 'production') {
          // const options = {
          //   host: configService.get('REDIS_HOST'),
          //   port: configService.get('REDIS_PORT'),
          //   token: configService.get('REDIS_PASSWORD'),
          // };
          return new RedisPubSub({
            publisher: new Redis(configService.get('REDIS_URL')),
            subscriber: new Redis(configService.get('REDIS_URL')),
            reviver: reviver,
          });
        } else return new PubSub();
      },
      inject: [ConfigService],
    },
  ],
  exports: [PUB_SUB],
})
export class PubSubModule {}
