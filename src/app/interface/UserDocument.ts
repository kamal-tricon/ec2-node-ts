import * as mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
    name: String,
    email: String,
    gender: String,
    active: Boolean,
    username: {type: String, required: true},
    password: String
}