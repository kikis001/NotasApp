import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/users/entities/user.entity';

@Schema()
export class Nota extends Document {
  @Prop({ type: String, require: true })
  title: string;
  @Prop({ type: String, require: true })
  body: string;
  @Prop({ type: String, require: true })
  category: string;
  @Prop({ type: String, require: true })
  color: string;
  @Prop({ type: [{ type: Types.ObjectId }], ref: Nota.name })
  notaI: Types.Array<Types.ObjectId>;
  @Prop({ type: Types.ObjectId, ref: User.name })
  userId: Types.ObjectId;
}

export const NotaSchema = SchemaFactory.createForClass(Nota);
