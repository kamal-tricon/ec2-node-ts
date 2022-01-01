"use strict";
exports.__esModule = true;
exports.User = void 0;
var mongoose = require("mongoose");
var schema = new mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    active: Boolean,
    username: { type: String, required: true },
    password: String
});
exports.User = mongoose.model('User', schema);
