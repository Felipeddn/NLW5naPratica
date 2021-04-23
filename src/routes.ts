import { Router } from 'express';
import { MessagesController } from './controllers/MessagesController';
import { SettingsController } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersController';

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);


export { routes }; 













//anotações 


/*
--tipos de parametros, 3 tipos
Routes Params => Parametro de rotas(url) =
     ex. http://localhost:3333/settings/1 
Query Params => Filtros e Buscas =  
    ex ex. http://localhost:3333/settings/1?search=algumacoisa  ( depois da rota ?)
Body Params => Corpo da requisição
quando usamos objetos {} nas requisições
*/