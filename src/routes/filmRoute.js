import { Router } from "express";
import filmController from '../controllers/filmController.js'

const route = Router();

route.post('/', filmController.create);
route.get('/', filmController.getAll);
route.get('/search/:title', filmController.getByTitle);
route.get('/list/for-character', filmController.getListForCharacter);
route.get('/:id', filmController.getById);
route.put('/:id', filmController.update);
route.delete('/:id', filmController.delete);

export default route;