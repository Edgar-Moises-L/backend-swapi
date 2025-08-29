import Vehicle from '../models/Vehicle.js'

class vehicleService {
    async create(vehicle) {
        return await Vehicle.create(vehicle);
    }

    async getAll(page = 1, limit = 10) {
        const options = {
            page,
            limit,
            select: "-createdAt -updatedAt -__v"
        };

        return await Vehicle.paginate({}, options);

    }

    async getByName(query) {
        return await Vehicle.find({
            name: { $regex: query, $options: 'i' }
        }).select("-createdAt -updatedAt -__v");
    }


    async getListForCharacter() {
        return await Vehicle.find({}, "name");
    }

    async getById(id) {
        return await Vehicle.findById(id).select("-createdAt -updatedAt -__v");
    }

    async update(id, vehicle) {
        return await Vehicle.findOneAndUpdate(id, vehicle, { new: true });
    }

    async delete(id) {
        return await Vehicle.findByIdAndDelete(id);
    }
}
export default new vehicleService();