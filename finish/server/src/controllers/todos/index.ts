import { Request, Response } from 'express';

import TodoModel from '../../models/todo';
import { Todo } from '../../types/todo';

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  const todos: Todo[] = await TodoModel.find();

  res.status(200).json({ todos });
};

export const addTodo = async (req: Request, res: Response): Promise<void> => {
  const body = req.body as Pick<Todo, 'title' | 'status'>;

  // If all or one of the required body is undefined
  if (!body.title || !body.status) {
    res.status(401).json({
      status: 401,
      errorMessage: `ValidationError: Todo validation failed: title: ${body.title}, status: ${body.status}`
    });

    return;
  }

  const newTodoModel: Todo = new TodoModel({
    title: body.title,
    status: body.status
  });

  const newTodo = await newTodoModel.save();
  const allTodos = await TodoModel.find();

  res.status(201).json({
    message: 'Todo successfully added!',
    todo: newTodo,
    todos: allTodos
  });
};

export const updateTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {
    params: { id },
    body
  } = req;

  // If all or one of the required req is undefined
  if (!body.title || !body.status || !id) {
    res.status(401).json({
      status: 401,
      errorMessage: `ValidationError: _id or required body properties is not defined.`
    });

    return;
  }

  const updatedTodo = await TodoModel.findByIdAndUpdate({ _id: id }, body);
  const allTodos = await TodoModel.find();

  if (!updatedTodo) {
    res
      .status(501)
      .json({ status: 501, errorMessage: 'Edit todo failed. Not implemented' });

    return;
  }

  res.status(200).json({
    message: 'Todo successfully edited',
    updatedTodo,
    todos: allTodos
  });
};

export const removeTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {
    params: { id }
  } = req;

  if (!id) {
    res.status(401).json({
      status: 401,
      errorMessage: `ValidationError: Params _id is not defined.`
    });

    return;
  }

  const removedTodo = await TodoModel.findByIdAndRemove(id);
  const allTodos = await TodoModel.find();

  if (!removedTodo) {
    res.status(501).json({
      status: 501,
      errorMessage: 'Remove todo failed. Not implemented'
    });

    return;
  }

  res.status(200).json({
    message: 'Todo successfully removed',
    removedTodo,
    todos: allTodos
  });
};
