import * as mongoose from 'mongoose';

export interface StationDocument extends mongoose.Document {
    stationName: String,
    stationCode: String,
    city: String,
    state: String
}