import planetService from '../services/planetService.js'

class planetController {
    constructor() { }

    async create(req, res) {
        try {
            const data = await planetService.create(req.body);
            res.status(201).json({ data });
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getAll(req, res) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const data = await planetService.getAll(Number(page), Number(limit));
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getListForCharacter(req, res) {
        try {
            const data = await planetService.getListForCharacter();
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    async getById(req, res) {
        try {
            const { id } = req.params;
            const data = await planetService.getById(id);
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await planetService.update(id, req.body);
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const data = await planetService.delete(id);
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const deletedPlanet = await planetService.delete(id);

            if (!deletedPlanet) {
                return res.status(404).json({ message: "Planeta no encontrado" });
            }

            return res.status(200).json({ message: "Registro eliminado correctamente" });

        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    }


}
export default new planetController();