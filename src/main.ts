import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
const cookieParser = require('cookie-parser');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useGlobalPipes(new ValidationPipe());
  app.useLogger(app.get(Logger));
  app.use(cookieParser());
  app.setGlobalPrefix('/api');
  const configService = app.get(ConfigService);
  app.enableCors({
    origin: [
      'https://chatterroom.tech',
      'https://main.d3kso0ojj0znf5.amplifyapp.com',
      'http://localhost:3000',
    ], // 允许来自前端的请求
    credentials: true,
  });

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`Application is running on: ${port}`);
}
bootstrap();
