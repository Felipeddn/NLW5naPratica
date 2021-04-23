
// no TypeScript ele pede a instalação dos tipos da biblioteca, para isso usamos o comando yarn add @types/express -D

// o node não entende essa sintaxe (import, from), ainda, para resolver isso usamos o comando yarn add ts-node-dev -D,
import express from "express"; 
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from 'path';

import './database';
import { routes } from './routes';

const app = express();

// define onde estão os arquivos publicos 
app.use(express.static(path.join(__dirname, "..", "public")))
app.set("views", path.join(__dirname, "..", "public"))
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => response.render("html/client.html"))

// criando o protocolo HTTP 
const http = createServer(app);
// criando o protocolo WS
const io = new Server(http);

// socket.id é o atributo que determina o identificador da conexão
io.on("connection", (socket: Socket) => {
    //console.log("Se conectou", socket.id)
}) 

app.use(express.json());

app.use(routes);

export { http, io } 