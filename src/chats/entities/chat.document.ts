import { AbstractEntity } from '../../common/database/abstract.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Message } from '../messages/entities/message.entity';
import { MessageDocument } from '../messages/entities/message.document';

@Schema()
export class ChatDocument extends AbstractEntity {
  @Prop()
  userId: string;

  //   @Prop()
  //   isPrivate: boolean;

  //   @Prop([String])
  //   userIds: string[];

  @Prop()
  name?: string;

  @Prop([MessageDocument])
  messages: MessageDocument[];
}

export const ChatSchema = SchemaFactory.createForClass(ChatDocument);
