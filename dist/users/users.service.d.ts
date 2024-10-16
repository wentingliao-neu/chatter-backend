/// <reference types="node" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersRepository } from './users.repository';
import { S3Service } from '../common/s3/s3.service';
import { UserDocument } from './entities/user.document';
export declare class UsersService {
    private readonly userRepository;
    private readonly s3Service;
    constructor(userRepository: UsersRepository, s3Service: S3Service);
    create(createUserInput: CreateUserInput): Promise<{
        imageUrl: string;
        email: string;
        username: string;
        password: string;
        _id: import("mongoose").Types.ObjectId;
    }>;
    uploadImage(file: Buffer, userId: string): Promise<void>;
    private hashPassword;
    findAll(): Promise<{
        imageUrl: string;
        email: string;
        username: string;
        password: string;
        _id: import("mongoose").Types.ObjectId;
    }[]>;
    findOne(_id: string): Promise<{
        imageUrl: string;
        email: string;
        username: string;
        password: string;
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(_id: string, updateUserInput: UpdateUserInput): Promise<{
        imageUrl: string;
        email: string;
        username: string;
        password: string;
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(_id: string): Promise<{
        imageUrl: string;
        email: string;
        username: string;
        password: string;
        _id: import("mongoose").Types.ObjectId;
    }>;
    verifyUser(email: string, password: string): Promise<{
        imageUrl: string;
        email: string;
        username: string;
        password: string;
        _id: import("mongoose").Types.ObjectId;
    }>;
    toEntity(userDocument: UserDocument): {
        imageUrl: string;
        email: string;
        username: string;
        password: string;
        _id: import("mongoose").Types.ObjectId;
    };
    private getUserImage;
}
