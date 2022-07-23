import { Schema, model } from 'mongoose';
import User from '../../../domain/User.entity';

const userSchema = new Schema<User>({
    name            : {type: String, required: true},
    surnameFather   : {type: String, required: true},
    surnameMother   : {type: String, required: false},
    email           : {type: String, required: true, unique: true},
    username        : {type: String, required: true},
    password        : {type: String, required: true},
    status          : {type: Boolean, default: true},
});

export default model<User>('User', userSchema);