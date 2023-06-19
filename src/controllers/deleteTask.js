import Task from "../models/task.js";

export default async function deleteTask(req,res){
    try{
        const {_id} = req.body; //get the _id from the request body

        if(!_id)return res.status(400).json({message:"id not specified"});
        await Task.deleteOne({_id});  //delete the task with the specified _id
        return res.status(200).json({message:"task deleted successfully"});

    }catch(err){
        console.log(err);
        return res.status(500).json({message:"internal server error"});
    }
    
}