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
            const data = await planetService.getAll();
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).send(e);
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

}
export default new planetController();