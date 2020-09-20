import { Router } from 'express';
import { getTodos, addTodo, editTodo, deleteTodo } from '../controllers/todos';

const router = Router();

router.get('/todos', getTodos);

router.post('/add-todo', addTodo);

router.put('/edit-todo/:id', editTodo);

router.delete('/delete-todo/:id', deleteTodo);

export default router;
