import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import routes from './routes';

const app = express();
const PORT = process.env.PORT || 8080;

const {
  MONGODB_ATLAS_USERNAME,
  MONGODB_ATLAS_PASSWORD,
  MONGODB_ATLAS_DBNAME
} = process.env;
const uri = `mongodb+srv://${MONGODB_ATLAS_USERNAME}:${MONGODB_ATLAS_PASSWORD}@clustertodo.dxefu.mongodb.net/${MONGODB_ATLAS_DBNAME}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

app.use(cors());
app.use(routes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

mongoose.set('useFindAndModify', true);
mongoose
  .connect(uri, options)
  .then(() => {
    app.listen(PORT, () => {
      console.info(`Example app listening at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    throw error;
  });
