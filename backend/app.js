import express from 'express';
import { config } from 'dotenv';
import UserRouter from './routes/user.js';
import LivesRouter from './routes/lives.js';
import ErrorMiddleware from './middlewares/ErrorMiddle.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {fileURLToPath} from 'url';
import { dirname,join,resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// iniatialing env file 
config({
    path: join(__dirname,'config/config.env')
});
export const app = express();

// middlewares 
app.use(cookieParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

// routes
const prifix = '/api/v1'
app.use(prifix,UserRouter);
app.use(prifix,LivesRouter);

app.use(express.static(join(__dirname,'../frontend/build')));

app.get('*',(req,res) => {
    res.sendFile(resolve(__dirname,'../frontend/build/index.html'))
});

app.use(ErrorMiddleware);
