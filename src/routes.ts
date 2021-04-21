import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';

const routes = Router();

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

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