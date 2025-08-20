import { Router } from "express";
import filmController from '../controllers/filmController.js'

const route = Router();

route.post('/', filmController.create);
route.get('/', filmController.getAll);
route.get('/:id', filmController.getById);
route.put('/:id', filmController.update);
route.delete('/:id', filmController.delete);

export default route;