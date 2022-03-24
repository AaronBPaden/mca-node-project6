"use strict";
import express from 'express';
import config from './config/config.js'
const server = express();

server.set('view engine', 'ejs');

server.listen(config.PORT, config.HOST, () => console.log(`Listening on ${config.HOST}:${config.PORT}`));
