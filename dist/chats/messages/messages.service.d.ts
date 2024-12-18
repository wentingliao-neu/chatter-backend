import { ChatsRepository } from '../chats.repository';
import { CreateMessageInput } from './dto/create-message';
import { Message } from './entities/message.entity';
import { GetMessagesArgs } from './dto/get-messages.args';
import { PubSub } from 'graphql-subscriptions';
import { ChatsService } from '../chats.service';
import { UsersService } from '../../users/users.service';
export declare class MessagesService {
    private readonly chatsRepository;
    private readonly chatsService;
    private readonly userService;
    private readonly pubSub;
    constructor(chatsRepository: ChatsRepository, chatsService: ChatsService, userService: UsersService, pubSub: PubSub);
    createMessage({ content, chatId }: CreateMessageInput, userId: string): Promise<Message>;
    getMessages({ chatId, skip, limit }: GetMessagesArgs): Promise<any[]>;
    countMessages(chatId: string): Promise<any>;
    messageCreated(): Promise<AsyncIterator<unknown, any, undefined>>;
}
