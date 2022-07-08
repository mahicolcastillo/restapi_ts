import { Schema, model } from 'mongoose';
import User from '../../core/entities/User';

const userSchema = new Schema<User>({
    name            : {type: String, required: true},
    surnameFather   : {type: String, required: true},
    surnameMother   : String,
    email           : {type: String, required: true, unique: true},
    // position        : {
    //     _id : {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Position',
    //         required: true
    //     },
    //     name: {type: String, required: true},
    // },
    username        : {type: String, required: true},
    password        : {type: String, required: true},
    status          : {type: Boolean, default: true},
});

export default model<User>('User', userSchema);