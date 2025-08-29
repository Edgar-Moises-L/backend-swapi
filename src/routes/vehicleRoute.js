import { Router } from "express";
import vehicleController from '../controllers/vehicleController.js'

const route = Router();

route.post('/', vehicleController.create);
route.get('/', vehicleController.getAll);
route.get('/search/:name', vehicleController.getByName);
route.get('/list/for-character', vehicleController.getListForCharacter);
route.get('/:id', vehicleController.getById);
route.put('/:id', vehicleController.update);
route.delete('/:id', vehicleController.delete);

export default route;