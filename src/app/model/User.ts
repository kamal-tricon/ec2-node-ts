import * as mongoose from 'mongoose';
import { UserDocument } from '../interface/UserDocument';

const schema = new mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    active: Boolean,
    username: {type: String, required: true},
    password: String
});

 export const User = mongoose.model<UserDocument>( 'User', schema);
