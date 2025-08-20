import Planet from '../models/Planet.js'

class planetService {
    async create(planet) {
        return await Planet.create(planet);
    }

    async getAll() {
        return await Planet.find();
    }

    async getById(id) {
        return await Planet.findById(id);
    }

    async update(id,planet) {
        return await Planet.findByIdAndUpdate(id, planet, {new: true});
    }

    async delete(id) {
        return await Planet.findByIdAndDelete(id);
    }
}
export default new planetService();