import express from 'express';
import { config } from 'dotenv';

config({ path: '../.env' });

const app = express();

const HOST = process.env.SERVER_HOST;
const PORT = process.env.SERVER_PORT;

app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://${HOST}:${PORT}`);
});
