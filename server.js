import express from 'express';
import {connect} from 'mongoose';
import router from './src/routes/task.js';
import { DATABASE_CONNECTION_STRING } from './src/config/database.js';
import { PORT } from './src/config/application.js';


const app = express();

//the function connects to a database and starts the server
async function startServer(){
    try{
        await connect(DATABASE_CONNECTION_STRING,{useNewUrlParser:true,useUnifiedTopology:true,family:4});
        app.listen(PORT,()=>console.log(`serer running on ${PORT}`));

    }catch(err){
        console.log('Database connection failed', err);
        
    }
}


app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(router);

startServer();