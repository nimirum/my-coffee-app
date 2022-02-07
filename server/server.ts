import express from "express";
import mongoose from 'mongoose'
import { coffeeRouter } from './routes/coffee'

const MONGO_PORT = 27017
const PORT = 5000;
const app = express();
app.use(express.json());
app.use(coffeeRouter)

const mongooseOpts = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };

mongoose.connect(`mongodb://localhost:${MONGO_PORT}/coffee-db`, {}, () => {
    console.log('connected to database')
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});