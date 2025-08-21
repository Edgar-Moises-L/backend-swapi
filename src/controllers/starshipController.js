import starshipService from '../services/starshipServices.js'

class starshipController {
    construct() { }

    async create(req, res) {
        try {
            const data = await starshipService.create(req.body);
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getAll(req, res) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const data = await starshipService.getAll(Number(page), Number(limit));
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e);
        }
    }
    
    async getListForCharacter(req, res) {
        try {
            const data = await starshipService.getListForCharacter();
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    async getById(req, res) {
        try {
            const { id } = req.params;
            const data = await starshipService.getById(id);
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await starshipService.update(id, req.body);
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const deletedStarship = await starshipService.delete(id);

            if (!deletedStarship) {
                return res.status(404).json({ message: "Nave espacial no encontrada" });
            }

            return res.status(200).json({ message: "Registro eliminado correctamente" });

        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    }

}
export default new starshipController();