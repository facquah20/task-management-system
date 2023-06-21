import "../styles/taskItem.css"

export default function TaskItem({_id,title,description,priority,status,dueDate}){

    return(
        <div className="tast-item">
            <h3 className="tast-title">{title}</h3>
            <p className="task-description">{description}</p>
            <div className="task-details">
                <p className="task-status" >status: {status}</p>
                <p className="task-priority">priority: {priority}</p>
                <p  className="task-due-date">Due-Date: {dueDate}</p>
            </div>
            <button className="delete-button">
                Delete
            </button>
        </div>
    )
}