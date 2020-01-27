import express, { NextFunction, Request, Response } from 'express';
import fileUpload from 'express-fileupload';
import createError from 'http-errors';
import path from 'path';
import logger from 'morgan';

import expensesRouter from './routes/expenses';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Requested-With, Accept');
  next();
});

app.use(logger('dev'));

app.use(
  fileUpload({
    limit: { fileSize: Infinity },
  })
);

app.use('/receipts', express.static(path.join(__dirname, '.data/receipts')));

app.use('/expenses', expensesRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const message = err.message;
  const error = req.app.get('env') === 'development' ? err : {};
  const status = err.status || 500;

  res.status(status || 500);
  res.send({
    status,
    message,
    error,
  });
});

app.listen(5000, () => console.log('API running at http://localhost:5000'));
