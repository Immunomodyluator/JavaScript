import express from 'express';

import { logRequestTimestamp, logRequestType } from './middleware.js';

const server = express();

server.use(logRequestTimestamp);
server.use(logRequestType);

server.get('/', (req, res) => {
    res.send('Learning to use middleware!');
})

export { server };