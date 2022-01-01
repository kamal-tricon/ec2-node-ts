"use strict";
exports.__esModule = true;
exports.mongooseConnector = void 0;
var mongoose = require("mongoose");
exports.mongooseConnector = mongoose.connect('mongodb://127.0.0.1:27017/users?directConnection=true&serverSelectionTimeoutMS=2000', {
// useCreateIndex: true,
// useNewUrlParser: true
});
