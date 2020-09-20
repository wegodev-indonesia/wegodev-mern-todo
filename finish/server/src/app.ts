import express, { Request, Response } from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(routes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.info(`Example app listening at http://localhost:${PORT}`);
});
