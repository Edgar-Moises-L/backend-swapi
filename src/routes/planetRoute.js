import { Router } from "express";
import planetController from '../controllers/planetController.js'

const route = Router();

route.post('/', planetController.create);
route.get('/', planetController.getAll);
route.get('/list/for-character', planetController.getListForCharacter);
route.get('/:id', planetController.getById);
route.put('/:id', planetController.update);
route.delete('/:id', planetController.delete);

export default route;