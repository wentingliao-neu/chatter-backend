import {
  Controller,
  UseGuards,
  UseInterceptors,
  Post,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CurrentUser } from '../auth/current-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { TokenPayload } from '../auth/token-payload.interface';
import { UsersService } from './users.service';
import { Express } from 'express';
import { Multer } from 'multer';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @UseGuards(JwtAuthGuard)
  @Post('image')
  @UseInterceptors(FileInterceptor('file'))
  async uploadProfilePicture(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 100000 }),
          new FileTypeValidator({ fileType: 'image/jpeg' }),
        ],
      }),
    )
    file: Express.Multer.File,
    @CurrentUser() user: TokenPayload,
  ) {
    return this.usersService.uploadImage(file.buffer, user._id);
  }
}
