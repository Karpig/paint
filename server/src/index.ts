import express from 'express';
import { config } from 'dotenv';
import WS from 'express-ws';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

config({ path: '../.env' });

const app = express();
const WSServer = WS(app);
const aWss = WSServer.getWss();

const HOST = process.env.SERVER_HOST;
const PORT = process.env.SERVER_PORT;

app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://${HOST}:${PORT}`);
});
