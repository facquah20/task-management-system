import "../styles/taskItem.css"

export default function TaskItem({_id,title,description,priority,status,dueDate}){

    const handleDelete=()=>{
        fetch('http://localhost:4000/api/delete-task',{
            method:"DELETE",
            body:JSON.stringify({_id})
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err));
    }

    const handleTaskCompleted =()=>{
        fetch('http://localhost:4000/api/update-task',
            {
                method:'PUT',
                body:JSON.stringify({_id,status:'completed'})
            }
        ).then(res=>res.json())
        .then(data=>{
            console.log(data);
            alert(data.message);
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
                <button className="delete-button" onClick={handleDelete()}>
                    Delete
                </button>
                <button className="completed-button" onClick={handleTaskCompleted()}>mark</button>
            </div>
        </div>
    )
}