import Species from '../models/Species.js';

const excludeFields = "-createdAt -updatedAt -__v";
const filter = "homeworld";

class SpeciesService {
    async create(species) {
        const newSpecies = await Species.create(species);
        return await Species.findById(newSpecies._id)
            .select(excludeFields)
            .populate({ path: filter, select: "name" });
    }

    async getAll(page = 1, limit = 10) {
        const options = {
            page,
            limit,
            select: excludeFields,
            populate: { path: filter, select: "name" }
        };

        return await Species.paginate({}, options);
    }

    async getByName(query) {
        return await Species.find({
            name: { $regex: query, $options: 'i' }
        })
            .select("-createdAt -updatedAt -__v -speciesUrl")
            .populate('homeworld', 'name');
    }

 
    async getListForCharacter() {
        return await Species.find({}, "name");
    }

    async getById(id) {
        return await Species.findById(id)
            .select(excludeFields)
            .populate({ path: filter, select: "name" });
    }

    async update(id, species) {
        return await Species.findByIdAndUpdate(id, species, { new: true })
            .select(excludeFields)
            .populate({ path: filter, select: "name" });
    }

    async delete(id) {
        return await Species.findByIdAndDelete(id).lean();
    }
}

export default new SpeciesService();







