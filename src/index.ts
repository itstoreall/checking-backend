// @ts-nocheck
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { Cron } from './services/cron';
import routes from './routes';

const app = express();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

app.use('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', routes);

app.listen(port, () => Cron({ host, port }));
app.timeout = 100000;

app.use((_req, res) =>
  res.status(404).json({ status: 'error', code: 404, message: `Not found` })
);

app.use((err, _req, res, _next) => {
  const code = err.status || 501;
  const status = err.status || 'error';
  res.status(code).json({ status, code, message: err.message });
});
