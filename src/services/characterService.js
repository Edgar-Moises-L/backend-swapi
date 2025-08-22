import Character from '../models/Character.js';

const excludeFields = "-createdAt -updatedAt -__v";

class CharacterService {
    async create(character) {
        const newCharacter = await Character.create(character);
        return await Character.findById(newCharacter._id)
            .select(excludeFields)
            .populate([
                { path: 'films', select: excludeFields },
                { path: 'homeworld', select: excludeFields },
                { path: 'species', select: excludeFields },
                { path: 'starships', select: excludeFields },
                { path: 'vehicles', select: excludeFields }
            ]);
    }

    async getAll(page = 1, limit = 10) {
        const options = {
            page,
            limit,
            select: excludeFields,
            populate: [
                { path: 'films', select: excludeFields },
                { path: 'homeworld', select: excludeFields },
                { path: 'species', select: excludeFields },
                { path: 'starships', select: excludeFields },
                { path: 'vehicles', select: excludeFields }
            ]
        };
        return await Character.paginate({}, options);
    }

    async getListForCharacter() {
        return await Character.find({}, "name");
    }

    async getById(id) {
        return await Character.findById(id)
            .select(excludeFields)
            .populate([
                { path: 'films', select: excludeFields },
                { path: 'homeworld', select: excludeFields },
                { path: 'species', select: excludeFields },
                { path: 'starships', select: excludeFields },
                { path: 'vehicles', select: excludeFields }
            ]);
    }

    async update(id, character) {
        return await Character.findByIdAndUpdate(id, character, { new: true })
            .select(excludeFields)
            .populate([
                { path: 'films', select: excludeFields },
                { path: 'homeworld', select: excludeFields },
                { path: 'species', select: excludeFields },
                { path: 'starships', select: excludeFields },
                { path: 'vehicles', select: excludeFields }
            ]);
    }

    async delete(id) {
        return await Character.findByIdAndDelete(id).lean();
    }
}

export default new CharacterService();
