import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.get('/todos', (req: Request, res: Response) => {
  res.status(200).send('This is the endpoint to get all the todos');
});

app.post('/add-todo', (req: Request, res: Response) => {
  res.status(201).json({ message: 'Todo added' });
});

app.put('/edit-todo/:id', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Todo updated', _id: req.params.id });
});

app.delete('/delete-todo/:id', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Todo deleted', _id: req.params.id });
});

app.listen(PORT, () => {
  console.info(`Example app listening at http://localhost:${PORT}`);
});
