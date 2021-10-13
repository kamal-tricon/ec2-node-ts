import * as mongoose from 'mongoose';

export interface TrainDocument extends mongoose.Document {
    trainName: String,
    trainNumber: String
}