
import { Schema,model } from "mongoose";

const taskSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:['completed','pending'],
        default:'pending'
    },
    priority:{
        type:String,
        enum: ['high','medium','low'],
        default:'medium',
    },
    dueDate:{
        type:Date,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,

    },
    updatedAt:{
        type:Date,
        default:Date.now,
    }
})

const Task = model('Task',taskSchema);

export default Task;