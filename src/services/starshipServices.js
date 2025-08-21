import Starship from '../models/Starship.js'

class starshipService {
    async create(starship) {
        return await Starship.create(starship);
    }

    async getAll() {
        return await Starship.find().select("-createdAt -updatedAt -__v");
    }

    async getById(id) {
        return await Starship.findById(id).select("-createdAt -updatedAt -__v");
    }

    async update(id, starship) {
        return await Starship.findOneAndUpdate(id, starship, { new: true });
    }

    async delete(id) {
        return await Starship.findByIdAndDelete(id);
    }
}
export default new starshipService();