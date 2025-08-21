import Film from '../models/Film.js'

class filmService {
    async create(film) {
        return await Film.create(film);
    }

    async getAll(page = 1, limit = 10) {
        const options = {
            page,
            limit,
            select: "-createdAt -updatedAt -__v"
        };
        return await Film.paginate({}, options);
    }

    async getById(id) {
        return await Film.findById(id).select("-createdAt -updatedAt -__v");
    }

    async update(id, film) {
        return await Film.findByIdAndUpdate(id, film, { new: true });
    }

    async delete(id) {
        return await Film.findByIdAndDelete(id);
    }
}
export default new filmService();