import starshipService from '../services/starshipServices.js'

class starshipController {
    construct() { }

    async create(req, res) {
        try {
            const data = await starshipService.create(req.body);
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e.message);
        }
    }

    async getAll(req, res) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const data = await starshipService.getAll(Number(page), Number(limit));
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

            const starship = await starshipService.getByName(name);

            if (!starship.length) {
                return res.status(404).json({ message: "No se encontraron naves espaciales" });
            }

            return res.json(starship);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error al buscar naves espaciales" });
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
            res.status(500).send(e.message);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await starshipService.update(id, req.body);
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e.message);
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