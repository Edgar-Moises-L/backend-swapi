import Species from '../models/Species.js'

class speciesService {
    async create(species) {
        return await Species.create(species);
    }

    async getAll(page = 1, limit = 10) {
        const options = {
            page,
            limit,
            select: "-createdAt -updatedAt -__v"
        }
        return await Species.paginate({}, options);
    }

    async getListForCharacter() {
        return await Species.find({}, "name");
    }

    async getById(id) {
        return await Species.findById(id).select("-createdAt -updatedAt -__v");
    }

    async update(id, species) {
        return await Species.findOneAndUpdate(id, species, { new: true });
    }

    async delete(id) {
        return await Species.findByIdAndDelete(id);
    }

}
export default new speciesService();