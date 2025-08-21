import Vehicle from '../models/Vehicle.js'

class vehicleService {
    async create(vehicle) {
        return await Vehicle.create(vehicle);
    }

    async getAll() {
        return await Vehicle.find().select("-createdAt -updatedAt -__v");
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