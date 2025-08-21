import characterService from '../services/characterService.js'

class characterController {
    constructor() { }

    async create(req, res) {
        try {
            const data = await characterService.create(req.body);
            res.status(201).json({ data });
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getAll(req, res) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const data = await characterService.getAll(Number(page), Number(limit));
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getById(req, res) {
        try {
            const { id } = req.params;
            const data = await characterService.getById(id);
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await characterService.update(id, req.body);
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e);
        }
    }

 async delete(req, res) {
        try {
            const { id } = req.params;
            const deletedCharacter = await characterService.delete(id);

            if (!deletedCharacter) {
                return res.status(404).json({ message: "Personaje no encontrado" });
            }

            return res.status(200).json({ message: "Registro eliminado correctamente" });

        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    }

}
export default new characterController();