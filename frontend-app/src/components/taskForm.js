
import React from 'react';
import "../styles/taskForm.css";

const TaskForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

   // Access the form data using `formData.get()`
    const title = formData.get('title');
    const description = formData.get('description');
    const priority = formData.get('priority');
    const dueDate = formData.get('dueDate');
    const status = formData.get('status');
    console.log(dueDate)
    console.log(status)

    const data = {
        title,
        description,
        priority,
        dueDate,
        status
    }
    console.log(data)

    // Perform any necessary form validation or data processing
    // Here, you can send the task data to your backend or perform any other operations

    // Clear the form after submission

    fetch('http://localhost:4000/api/add-new-task',{
        method:"POST",
        body:formData
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      alert(data.message);
    })
    .catch(err=>{
        console.log(err);
    })



    //form.reset();
  };

  return (
    <form onSubmit={handleSubmit} action='http://localhost:4000/api/add-new-task'
    method='POST' encType='multipart/form'
    >
        <h4 style={{textAlign:"center"}}>Create a Task</h4>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" required></textarea>
      </div>
      <div>
        <label htmlFor="priority">Priority:</label>
        <select id="priority" name="priority" required>
          <option value="">Select Priority</option>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </div>
      <div>
        <label htmlFor="dueDate">Due Date:</label>
        <input type="date" id="dueDate" name="dueDate" required />
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <select id="status" name="status" required>
          <option value="">Select Status</option>
          <option value="pending">pending</option>
          <option value="completed">completed</option>
        </select>
      </div>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
