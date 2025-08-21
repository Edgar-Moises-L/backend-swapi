import Character from '../models/Character.js'

class characterService {
    async create(character) {
        return await Character.create(character);
    }

    async getAll(page = 1, limit = 10) {
        const options = {
            page,
            limit,
            select: "-createdAt -updatedAt -__v"
        };
        return await Character.paginate({}, options);
    }

    async getByName(name) {
        const query = { name: new RegExp(name, 'i') };
        const options = "-createdAt -updatedAt -__v";

        return await Character.find(query).select(options);

    }

    async getById(id) {
        return await Character.findById(id).select("-createdAt -updatedAt -__v");
    }

    async update(id, character) {
        return await Character.findByIdAndUpdate(id, character, { new: true });
    }

    async delete(id) {
        return await Character.findByIdAndDelete(id);
    }
}
export default new characterService();