import e from 'express';
import express from 'express';
import { CONFIG } from './constants.js'
import morgan from 'morgan';
const server = express();

//Here, we'll implement our routes and middleware
server.use(morgan('tiny'));

server.get('/check', (req, res) => {
    let obj = { version: '0.0.1' };
    return res.json(obj);
})

server.get('/config', (req, res) => {
    return res.json(CONFIG);
})

export { server };