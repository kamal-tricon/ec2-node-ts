import * as mongoose from 'mongoose';
import { QuestionDocument } from './QuestionDocument';

export interface QuizDocument extends mongoose.Document {
    id: string;
    title: string;
    questions: [QuestionDocument]
}