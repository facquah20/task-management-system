import Task from "../models/task.js";

async function deleteTask(req,res){
    const {_id} = req.body;
    if(!_id)return res.status(400).json({message:"id not specified"});
    await Task.deleteOne({_id});
    return res.status(200).json({message:"task deleted successfully"});
    
}