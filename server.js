import express from 'express';
import {connect} from 'mongoose';
import router from './src/routes/task.js';
import { DATABASE_CONNECTION_STRING } from './src/config/database.js';
import { PORT } from './src/config/application.js';


const app = express();
console.log(DATABASE_CONNECTION_STRING)

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
// Enable CORS middleware
app.use((req, res, next) => {
    // Set headers to allow all origins
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Set headers to allow specific HTTP methods
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  
    // Set headers to allow specific headers
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    // Continue to the next middleware
    next();
  });

app.use(router);

startServer();