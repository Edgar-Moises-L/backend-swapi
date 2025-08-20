import { Router } from "express";
import vehicleController from '../controllers/vehicleController.js'

const route = Router();

route.post('/', vehicleController.create);
route.get('/', vehicleController.getAll);
route.get('/:id', vehicleController.getById);
route.put('/:id', vehicleController.update);
route.delete('/:id', vehicleController.delete);

export default route;