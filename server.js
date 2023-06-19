import express from 'express';
import {connect} from 'mongoose';
import router from './src/routes/task.js';


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(router);