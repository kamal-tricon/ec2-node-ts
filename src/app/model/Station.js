"use strict";
exports.__esModule = true;
exports.Station = void 0;
var mongoose = require("mongoose");
var stationSchema = new mongoose.Schema({
    stationName: String,
    stationCode: String,
    city: String,
    state: String
});
exports.Station = mongoose.model('Station', stationSchema);
