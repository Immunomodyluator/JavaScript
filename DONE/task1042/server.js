import express from 'express';
import { logRequestType } from './middleware';

const server = express();

server.get('/', (req, res) => {
    res.send('Learning to use middleware!');
})

export { server };


server.use(logRequestType);