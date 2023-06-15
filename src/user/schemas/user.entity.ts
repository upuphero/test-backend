import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
    @Prop()
    userId: string;

    @Prop()
    email: string;
    @Prop()
    password: string;
    }


