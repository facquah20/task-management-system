
import './App.css';
import TaskForm from './components/taskForm.js';
import TaskItem from './components/taskItem.js';

function App() {
  return (
    <div>
      <TaskForm/>
    <TaskItem title={'Teaching classical Mechanics'}
    description={"The love for classical mechanics makes the people go crazy"}
    status={"pending"}
    priority={"low"}
    dueDate={"2023/07/18"}
    />
    </div>
  );
}

export default App;
