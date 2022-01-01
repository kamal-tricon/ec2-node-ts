"use strict";
exports.__esModule = true;
exports.Train = void 0;
var mongoose = require("mongoose");
var trainSchema = new mongoose.Schema({
    trainName: String,
    trainNumber: String
});
exports.Train = mongoose.model('Train', trainSchema);
