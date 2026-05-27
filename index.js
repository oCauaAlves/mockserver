import { createServer } from "http";

const hostname = "127.0.0.1";
const PORT = 3000;

const server = createServer((req, res) => {
    res.end("Aplicacao web rodando no Node.js");
});

server.listen(PORT, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});