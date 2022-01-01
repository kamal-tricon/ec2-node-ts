"use strict";
exports.__esModule = true;
exports.Quiz = void 0;
var mongoose = require("mongoose");
var quizSchema = new mongoose.Schema({
    id: Number,
    title: { type: String, required: true },
    questions: []
});
exports.Quiz = mongoose.model('Quiz', quizSchema);
