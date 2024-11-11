"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const nestjs_pino_1 = require("nestjs-pino");
const config_1 = require("@nestjs/config");
const cookieParser = require('cookie-parser');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { bufferLogs: true });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useLogger(app.get(nestjs_pino_1.Logger));
    app.use(cookieParser());
    app.setGlobalPrefix('/api');
    const configService = app.get(config_1.ConfigService);
    app.enableCors({
        origin: [
            'https://chatterroom.tech',
            configService.get('FRONTEND_URL'),
            'http://localhost:3000',
        ],
        credentials: true,
    });
    const port = configService.getOrThrow('PORT') || 3001;
    await app.listen(port);
    console.log(`Application is running on: ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map