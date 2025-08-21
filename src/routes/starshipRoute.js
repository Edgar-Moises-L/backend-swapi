import { Router } from "express";
import starshipController from '../controllers/starshipController.js'

const route = Router();

route.post('/', starshipController.create);
route.get('/', starshipController.getAll);
route.get('/list/for-character', starshipController.getListForCharacter);
route.get('/:id', starshipController.getById);
route.put('/:id', starshipController.update);
route.delete('/:id', starshipController.delete);

export default route;