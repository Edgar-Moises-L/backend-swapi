import { Router } from "express";
import speciesController from '../controllers/speciesController.js'

const route = Router();

route.post('/', speciesController.create);
route.get('/', speciesController.getAll);
route.get('/:id', speciesController.getById);
route.put('/:id', speciesController.update);
route.delete('/:id', speciesController.delete);

export default route;