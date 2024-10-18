/// <reference types="cookie-parser" />
import { ConfigService } from '@nestjs/config';
import { User } from '../users/entities/user.entity';
import { TokenPayload } from './token-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { Request } from 'express';
export declare class AuthService {
    private readonly configService;
    private readonly jwtService;
    constructor(configService: ConfigService, jwtService: JwtService);
    login(user: User, response: Response): Promise<string>;
    verifyWs(request: Request, connectionParams?: any): TokenPayload;
    logout(response: Response): Promise<void>;
}
