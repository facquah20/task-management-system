
import "../styles/taskContainer.css";
import TaskForm from "./taskForm";
import Task from "./tasks";
export default function TaskContainer(){

    return(
        <div className="container">
            <div className="app-name">
                <p>Task Management System</p>
            </div>
            <div className="app-features">
                <div>
                    <p>Create a Task</p>
                </div>
                <div>
                    <p>Delete a Task</p>
                </div>
                <div>
                    <p>Mark task as completed</p>
                </div>
            </div>
            <TaskForm/>
            <Task/>
        </div>
    );
}