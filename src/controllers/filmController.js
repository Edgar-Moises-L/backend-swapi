import filmService from '../services/filmService.js'

class filmController {
    constructor() { }

    async create(req, res) {
        try {
            const data = await filmService.create(req.body);
            res.status(201).json({ data });
        } catch (e) {
            res.status(500).send(e.message);
        }
    }

    async getAll(req, res) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const data = await filmService.getAll(Number(page), Number(limit));
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e.message);
        }
    }

    async getByTitle(req, res) {
        try {
            const { title } = req.params;
            if (!title) {
                return res.status(400).json({ message: "Se requiere el parámetro 'title'" });
            }

            const film = await filmService.getByTitle(title);

            if (!film.length) {
                return res.status(404).json({ message: "No se encontraron la pelicula" });
            }

            return res.json(film);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error al buscar la pelicula" });
        }
    }

    async getListForCharacter(req, res) {
        try {
            const data = await filmService.getListForCharacter();
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }


    async getById(req, res) {
        try {
            const { id } = req.params;
            const data = await filmService.getById(id);
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e.message);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await filmService.update(id, req.body);
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e.message);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const deletedFilm = await filmService.delete(id);

            if (!deletedFilm) {
                return res.status(404).json({ message: "Pelicula no encontrada" });
            }

            return res.status(200).json({ message: "Registro eliminado correctamente" });

        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    }

}
export default new filmController();