import { fastify } from "fastify";

const PORT = 3333;

const app = fastify();

app.get('/', () =>  'Hello World');

app.listen( {
    port: PORT
}).then(() =>  {
    console.log('Http server running on port ', PORT);
})