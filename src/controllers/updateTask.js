import Task from "../models/task.js";

export default async function updateTask(req,res){
    try{
        const {_id} = req.body; //get _id of the task to update
        if(!_id)return res.status(400).json({message:"_id not specified"});
        else{
            const {title,description,status,priority} = req.body;
           const updatedTask = await Task.findOneAndUpdate({_id},{title,description,status,priority});
           if(updatedTask)return res.status(200).json({message:'Task updated successfully'});
           else return res.status(400).json({message:"task not found"});
        }
        
    }catch(err){
        console.log(err);
        return res.status(500).json({message:"internal server error"});
    }
}