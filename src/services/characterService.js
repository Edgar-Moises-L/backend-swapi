import Character from '../models/Character.js'

class characterService {
    async create(character) {
        return await Character.create(character);
    }

    async getAll() {
        return await Character.find();
    }

    async getById(id) {
        return await Character.findById(id).select("-createdAt -updatedAt -__v");
    }

    async update(id,character) {
        return await Character.findByIdAndUpdate(id, character, {new: true});
    }

    async delete(id) {
        return await Character.findByIdAndDelete(id);
    }
}
export default new characterService();