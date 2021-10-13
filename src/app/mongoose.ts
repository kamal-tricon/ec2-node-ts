import mongoose from 'mongoose';

export const mongooseConnector = mongoose.connect('mongodb://127.0.0.1:27017/users?directConnection=true&serverSelectionTimeoutMS=2000', 
{
    // useCreateIndex: true,
    // useNewUrlParser: true
    
});
