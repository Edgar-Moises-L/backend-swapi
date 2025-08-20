import { Router } from "express";
import veicleController from '../controllers/veicleController.js'

const route = Router();

route.post('/', veicleController.create);
route.get('/', veicleController.getAll);
route.get('/:id', veicleController.getById);
route.put('/:id', veicleController.update);
route.delete('/:id', veicleController.delete);

export default route;