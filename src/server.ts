import * as http from "http";
import { SumaValores } from './SumaValores.js';

const server = http.createServer((request, response) =>
{
    response.end("Hello, JS World --> " + SumaValores(1, 5));
});

server.listen(3000);