import 'reflect-metadata';
import { mongoUri, port } from "./config/app.config";
import Bootstrap from "./bootstrap/bootstrap";
import mongoose from 'mongoose';
import './helpers/cron-runner-helpers';
import queueService from './core/service/queue-service';
import socketService from './core/service/socket-service';
require('dotenv').config();

var http = require('http');

const server = http.createServer(Bootstrap.instance);

mongoose.connect(mongoUri);

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

queueService.init().catch(() => {
  throw new Error( `Unable to connect to redis` );
});

socketService.init(server);
server.listen(port, () => {
  console.log(`Server is listening on :${port}`);
});