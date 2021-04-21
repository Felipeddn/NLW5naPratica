// no TypeScript ele pede a instalação dos tipos da biblioteca, para isso usamos o comando yarn add @types/express -D

import express from "express"; 
// o node não entende essa sintaxe ainda para resolver isso usamos o comando yarn add ts-node-dev -D

import './database';
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);

//O JavaScript por padrão importa arquivos index em um diretório, esse arquivo está criando a conexão com o banco de dados

// removido na aula 2 1:06:50
// app.get("/", (request, response) => {
//     // return response.send("Olá NLW#05")

//     // uma forma de retornar json
//     return response.json({
//         message: "Olá NLW - 05"
//     })
// })

// //podemos usar a mesma rota para métodos diferentes
// app.post("/", (request, response) => {
//     return response.json({message : "Usuário salvo com sucesso!"})
// })

app.listen(3333, () => console.log("Server is running in 3333"));


