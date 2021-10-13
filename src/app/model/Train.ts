import * as mongoose from 'mongoose';
import { TrainDocument } from '../interface/train-document';

const trainSchema = new mongoose.Schema({
    trainName: String,
    trainNumber: String
});

export const Train = mongoose.model<TrainDocument>('Train', trainSchema);