import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { uploadSingleController } from './controllers';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send(`
    <form action="/upload" enctype="multipart/form-data" method="post">
      <input type="file" name="file"><br>
      <button>Upload</button>
    </form>
  `);
});

app.post('/upload', uploadSingleController);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});