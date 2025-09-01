import { Router } from "express";
import characterController from '../controllers/characterController.js'

const route = Router();

route.post('/', characterController.create);
route.get('/', characterController.getAll);
route.get('/search/:name', characterController.getByName);
route.get('/list/character', characterController.getList);
route.get('/:id', characterController.getById);
route.put('/:id', characterController.update);
route.delete('/:id', characterController.delete);

export default route;