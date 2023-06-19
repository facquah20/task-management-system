import Task from "../models/task.js";

export default async function getTasks(req,res){
    try{
        let tasks;
        if(req.query){
            // Filter tasks based on query parameters
            tasks = await Task.find(req.query); 
        }
        else{
            tasks = Task.find(); //return all task;
        }
        return res.status(200).json({items:tasks});

    }catch(err){
        return res.status(500).json({message:"internal server error"});
    }
}