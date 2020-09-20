import { Request, Response } from 'express';

export const getTodos = (req: Request, res: Response): void => {
  res.status(200).send('This is the endpoint to get all the todos');
};

export const addTodo = (req: Request, res: Response): void => {
  res.status(201).json({ message: 'Todo added' });
};

export const editTodo = (req: Request, res: Response): void => {
  res.status(200).json({ message: 'Todo updated', _id: req.params.id });
};

export const deleteTodo = (req: Request, res: Response): void => {
  res.status(200).json({ message: 'Todo deleted', _id: req.params.id });
};
