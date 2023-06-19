import express from 'express';
import addTask from '../controllers/createTask.js';
import deleteTask from '../controllers/deleteTask.js';
import updateTask from '../controllers/updateTask.js';
import getTasks from '../controllers/getTasks.js';

const router = express.Router();

router
.post('/api/add-new-task',addTask)
.delete('/api/delete-task',deleteTask)
.put('/api/update-task',updateTask)
.get('api/get-task',getTasks);

export default router;