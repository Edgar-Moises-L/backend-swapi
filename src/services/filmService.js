import Film from '../models/Film.js'

class filmService {
    async create(film) {
        return await Film.create(film);
    }

    async getAll() {
        return await Film.find();
    }

    async getById(id) {
        return await Film.findById(id);
    }

    async update(id,film) {
        return await Film.findByIdAndUpdate(id, film, {new: true});
    }

    async delete(id) {
        return await Film.findByIdAndDelete(id);
    }
}
export default new filmService();