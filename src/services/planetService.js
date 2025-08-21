import Planet from '../models/Planet.js'

class planetService {
    async create(planet) {
        return await Planet.create(planet);
    }

    async getAll(page = 1, limit =10) {
        const options = {
            page,
            limit,
            select: "-createdAt -updatedAt -__v"
        }
        return await Planet.paginate({},options);
    }

    async getById(id) {
        return await Planet.findById(id).select("-createdAt -updatedAt -__v");
    }

    async update(id,planet) {
        return await Planet.findByIdAndUpdate(id, planet, {new: true});
    }

    async delete(id) {
        return await Planet.findByIdAndDelete(id);
    }
}
export default new planetService();