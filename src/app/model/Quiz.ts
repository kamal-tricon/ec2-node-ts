import * as mongoose from 'mongoose';
import { QuizDocument } from '../interface/QuizDocument';

const quizSchema = new mongoose.Schema({
    id: Number,
    title: {type: String, required: true},
    questions: []
});

export const Quiz = mongoose.model<QuizDocument>('Quiz', quizSchema);