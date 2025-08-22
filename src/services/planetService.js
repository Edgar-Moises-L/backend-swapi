import Planet from '../models/Planet.js';

const excludeFields = "-createdAt -updatedAt -__v";
const filter = "residents";

class PlanetService {
    async create(planet) {
        const newPlanet = await Planet.create(planet);
        return await Planet.findById(newPlanet._id)
            .select(excludeFields)
            .populate({ path: filter, select:  "name" });
    }

    async getAll(page = 1, limit = 10) {
        const options = {
            page,
            limit,
            select: excludeFields,
            populate: { path: filter, select:  "name" }
        };
        return await Planet.paginate({}, options);
    }

    async getListForCharacter() {
        return await Planet.find({}, "name");
    }

    async getById(id) {
        return await Planet.findById(id)
            .select(excludeFields)
            .populate({ path: filter, select:  "name" });
    }

    async update(id, planet) {
        return await Planet.findByIdAndUpdate(id, planet, { new: true })
            .select(excludeFields)
            .populate({ path: filter, select:  "name" });
    }

    async delete(id) {
        return await Planet.findByIdAndDelete(id).lean();
    }
}

export default new PlanetService();
