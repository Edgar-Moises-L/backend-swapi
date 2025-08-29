import Starship from '../models/Starship.js'

class starshipService {
    async create(starship) {
        return await Starship.create(starship);
    }

    async getAll(page = 1, limit = 10) {
        const options = {
            page,
            limit,
            select: "-createdAt -updatedAt -__v"
        };
        return await Starship.paginate({}, options);
    }

    
      async getByName(query) {
            return await Starship.find({name: { $regex: query, $options: 'i' }
            }).select("-createdAt -updatedAt -__v");
        }

    async getListForCharacter() {
        return await Starship.find({}, "name");
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