import planetService from '../services/planetService.js'

class planetController {
    constructor() { }

    async create(req, res) {
        try {
            const data = await planetService.create(req.body);
            res.status(201).json({ data });
        } catch (e) {
            res.status(500).send(e.message);
        }
    }

    async getAll(req, res) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const data = await planetService.getAll(Number(page), Number(limit));
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e.message);
        }
    }

       async getByName(req, res) {
        try {
            const { name } = req.params;
            if (!name) {
                return res.status(400).json({ message: "Se requiere el parámetro 'name'" });
            }

            const planet = await planetService.getByName(name);

            if (!planet.length) {
                return res.status(404).json({ message: "No se encontraron resultados" });
            }

            return res.json(planet);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error al buscar planetas" });
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
            res.status(500).send(e.message);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await planetService.update(id, req.body);
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e.message);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const data = await planetService.delete(id);
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e.message);
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