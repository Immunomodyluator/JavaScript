import express from 'express';
import { logger } from './middleware.js'
const server = express();

var configString = ':date';

server.get('/', (req, res) => {
    res.send('Learning to use middleware!');
});

server.get('/about', (req, res) => {
    res.send(`I'm going to become a JS Developer in ${new Date().getFullYear()}!`);
})

server.use(logger(configString));

export { server };