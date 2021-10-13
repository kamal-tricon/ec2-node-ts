import * as mongoose from 'mongoose';
import { StationDocument } from '../interface/station-document';
const stationSchema = new mongoose.Schema({
    stationName: String,
    stationCode: String,
    city: String,
    state: String
});
export const Station = mongoose.model<StationDocument>( 'Station', stationSchema);