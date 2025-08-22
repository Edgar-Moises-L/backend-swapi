import Character from '../models/Character.js';

const excludeFields = "-createdAt -updatedAt -__v";

class CharacterService {
    async create(character) {
        const newCharacter = await Character.create(character);
        return await Character.findById(newCharacter._id)
            .select(excludeFields)
            .populate([
                { path: 'films', select:  "title" },
                { path: 'homeworld', select:  "name" },
                { path: 'species', select:  "name" },
                { path: 'starships', select:  "name" },
                { path: 'vehicles', select:  "name" }
            ]);
    }

    async getAll(page = 1, limit = 10) {
        const options = {
            page,
            limit,
            select: excludeFields,
            populate: [
                { path: 'films', select:  "title" },
                { path: 'homeworld', select:  "name" },
                { path: 'species', select:  "name" },
                { path: 'starships', select:  "name" },
                { path: 'vehicles', select:  "name" }
            ]
        };
        return await Character.paginate({}, options);
    }

   async getByName(query) {
        return await Character.find({ name: { $regex: query, $options: 'i' } })
            .select(excludeFields)
            .populate([
                { path: 'films', select: "title" },
                { path: 'homeworld', select: "name" },
                { path: 'species', select: "name" },
                { path: 'starships', select: "name" },
                { path: 'vehicles', select: "name" }
            ]);
    }

    async getById(id) {
        return await Character.findById(id)
            .select(excludeFields)
            .populate([
                { path: 'films', select:  "title" },
                { path: 'homeworld', select:  "name" },
                { path: 'species', select:  "name" },
                { path: 'starships', select:  "name" },
                { path: 'vehicles', select:  "name" }
            ]);
    }

    async update(id, character) {
        return await Character.findByIdAndUpdate(id, character, { new: true })
            .select(excludeFields)
            .populate([
                { path: 'films', select:  "title" },
                { path: 'homeworld', select:  "name" },
                { path: 'species', select:  "name" },
                { path: 'starships', select:  "name" },
                { path: 'vehicles', select:  "name" }
            ]);
    }

    async delete(id) {
        return await Character.findByIdAndDelete(id).lean();
    }
}

export default new CharacterService();
