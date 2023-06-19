import Task from "../models/task.js";

//validates if a string is a date object
function isDateStringValid(dateString) {
    const dateObject = new Date(dateString);
    return dateObject instanceof Date && !isNaN(dateObject);
  }
  

async function isValidInputs(obj){
    /*
    fields to validate
    ->title
    ->status
    ->description
    ->dueDate
    */
   const {title,status,description,dueDate} = obj;
   const titleMinLength = 5;
   const descriptionMinLength = 20;
   
   if(!title || !status || !description || !dueDate)return false;
   else return title.length >= titleMinLength && description.length >= descriptionMinLength 
   && isDateStringValid(dueDate);
}


export default async function addTask(req,res){
    //validates the inputes before saving to database;
    try{
    const isValid = await isValidInputs(req.body);
    if(!isValid)return res.status(400).json({message:'Invalid inputs or some fields are missing'});
    const task = new Task({...req.body});
    await task.save();
    return res.status(200).json({message:"Task added successfully"});


    }catch(err){
        //console.log(err);
        return res.status(500).json({message:"internal server error"});
    }
    
}
