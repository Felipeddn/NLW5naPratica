import { http } from './http';
import './websocket/client';

//o app.listen teve que ser alterado por conta do websocket e ficou http.use
http.listen(3333, () => console.log("Server is running in 3333"));

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




