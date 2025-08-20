import filmService from '../services/filmService.js'

class filmController {
    constructor() { }

    async create(req, res) {
        try {
            const data = await filmService.create(req.body);
            res.status(201).json({ data });
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getAll(req, res) {
        try {
            const data = await filmService.getAll();
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getById(req, res) {
        try {
            const { id } = req.params;
            const data = await filmService.getById(id);
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await filmService.update(id, req.body);
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const data = await filmService.delete(id);
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e);
        }
    }

}
export default new filmController();