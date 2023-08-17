import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import publicRoutes from './routes/public.routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS
app.use((req: Request, res: Response, next: NextFunction) => {
  // allow access from every, elminate CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  // set the allowed HTTP methods to be requested
  res.setHeader('Access-Control-Allow-Methods', ['GET', 'POST', 'PUT', 'DELETE']);
  // headers clients can use in their requests
  res.setHeader('Access-Control-Allow-Headers','Content-Type');

  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/', publicRoutes);

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port} ⚡️`);
});
