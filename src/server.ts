import { createServer, IncomingMessage, ServerResponse } from 'http';
 
import { SumaValores } from './SumaValores.js';

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
    console.log(request.url);
    response.end("Hello, JS World --> " + SumaValores(1, 5));
});

server.listen(3000);