import vehicleService from '../services/vehicleService.js'

class vehicleController {
    construct() { }

    async create(req, res) {
        try {
            const data = await vehicleService.create(req.body);
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e.message);
        }
    }

    async getAll(req, res) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const data = await vehicleService.getAll(Number(page), Number(limit));
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

            const vehicle = await vehicleService.getByName(name);

            if (!vehicle.length) {
                return res.status(404).json({ message: "No se encontraron personajes" });
            }

            return res.json(vehicle);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error al buscar personajes" });
        }
    }

    async getListForCharacter(req, res) {
        try {
            const data = await vehicleService.getListForCharacter();
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }


    async getById(req, res) {
        try {
            const { id } = req.params;
            const data = await vehicleService.getById(id);
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e.message);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await vehicleService.update(id, req.body);
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e.message);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const deletedVehicle = await vehicleService.delete(id);

            if (!deletedVehicle) {
                return res.status(404).json({ message: "Veiculo no encontrado" });
            }

            return res.status(200).json({ message: "Registro eliminado correctamente" });

        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    }

}
export default new vehicleController();