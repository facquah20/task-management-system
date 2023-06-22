import "../styles/taskItem.css"

export default function TaskItem({_id,title,description,priority,status,dueDate}){

    const handleDelete=(_id)=>{
        fetch('http://localhost:4000/api/delete-task',{
            method:"DELETE",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({_id:_id})
        })
        .then(res=>res.json())
        .then(data=>alert(data.message))
        .catch(err=>console.log(err));
    }

    const handleTaskCompleted =(_id)=>{
        fetch('http://localhost:4000/api/update-task',
            {
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify({_id:_id,status:'completed'})
            }
        ).then(res=>res.json())
        .then(data=>{
            alert(data.message);
            //alert(data.message);
        })
    }

    return(
        <div className="tast-item">
            <h3 className="tast-title">{title}</h3>
            <p className="task-description">{description}</p>
            <div className="task-details">
                <p className="task-status" >status: {status}</p>
                <p className="task-priority">priority: {priority}</p>
                <p  className="task-due-date">Due-Date: {dueDate}</p>
            </div>
            <div>
                <button className="delete-button" onClick={()=>handleDelete(_id)}>
                    Delete
                </button>
                <button className="completed-button" onClick={()=>handleTaskCompleted(_id)}>mark</button>
            </div>
        </div>
    )
}