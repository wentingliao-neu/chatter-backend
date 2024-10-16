import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get('count')
  @UseGuards(JwtAuthGuard)
  async countMessages(@Query('chatId') chatId: string) {
    console.log('arrive messages/count chatId', chatId);
    return this.messagesService.countMessages(chatId);
  }
}
