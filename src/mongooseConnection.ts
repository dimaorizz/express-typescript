import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {useFindAndModify: true, useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, err => {
  if(err) {
    return console.log(`Mongoose connection error: ${err}`);
  }
  console.log('Mongoose connected');
});