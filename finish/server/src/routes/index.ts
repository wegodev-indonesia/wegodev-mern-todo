import { Router } from 'express';
import bodyParser from 'body-parser';

import {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  removeTodo
} from '../controllers/todos';

const router = Router();
const jsonParser = bodyParser.json();

router.get('/api/todos', getTodos);

router.get('/api/todo/:id', getTodo);

router.post('/api/add-todo', jsonParser, addTodo);

router.put('/api/update-todo/:id', jsonParser, updateTodo);

router.delete('/api/remove-todo/:id', jsonParser, removeTodo);

export default router;
