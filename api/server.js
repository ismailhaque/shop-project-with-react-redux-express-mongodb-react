import dotenv from 'dotenv';
import express from 'express';
import Color from 'colors';
import productRoute from './routes/productRoute.js';
import mongoDBconnect from './config/db.js';
import errorHandler from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path, { resolve } from 'path'


//  init express
const app = express();

const __dirname = resolve()

dotenv.config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// use cookie parser
app.use(cookieParser());

app.use(cors())

// init env variables
const port = process.env.PORT || 5000;

// routes
app.use(`/api/product`, productRoute);

// static 

app.use(express.static('api/public'))
app.use(express.static('build'))

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '/build/index.html'))

})

// use express error handler
app.use( errorHandler );

// listen server
app.listen(port, () => {
    // mongoDB connect
    mongoDBconnect();

    console.log(`server is runing on port ${ port }`.bgGreen.black);

})

