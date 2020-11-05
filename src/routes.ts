import express, { response } from 'express';
import ClassesController from './controllers/ClassesControllers';
import ConnectionsController from './controllers/connectionsControlers';


const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();


 
routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.post('/connections', connectionsControllers.create)
routes.get('/connections', connectionsControllers.index)


export default routes;