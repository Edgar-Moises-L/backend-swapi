import Species from '../models/Species.js'

class speciesService {
    async create(species) {
        return await Species.create(species);
    }

    async getAll() {
        return await Species.find();
    }

    async getById(id) {
        return await Species.findById(id);
    }

    async update(id, species) {
        return await Species.findOneAndUpdate(id, species, { new: true });
    }

    async delete(id) {
        return await Species.findByIdAndDelete(id);
    }

}
export default new speciesService();