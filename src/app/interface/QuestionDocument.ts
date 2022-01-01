import * as mongoose from 'mongoose';

export interface QuestionDocument extends mongoose.Document {
    id: number;
    title: string;
    options: [{
        title: string;
        isCorrect: boolean
    }]
}