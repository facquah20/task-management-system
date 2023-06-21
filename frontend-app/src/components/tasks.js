import { useState,useEffect } from "react"
import TaskItem from "./taskItem";
import "../styles/tasks.css"

export default function Task(){
    const[items,setItems] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/api/get-task')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setItems(data.items);
        })
    },[items])

    return(
        <div className="task-list">
            <div>
                <h3 style={{textAlign:"center"}}>List of all Tasks</h3>
            </div>
            {
                items?.map(item=>{
                   return <TaskItem key={item._id} title={item.title} description={item.description}
                    status={item.status} priority={item.priority} dueDate={item.dueDate}
                    _id={item._id}/>
                })
            }
        </div>

    );
}