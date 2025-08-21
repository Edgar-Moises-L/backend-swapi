import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const vehicleSchema = new Schema({
    name: { type: String, required: true },
    model: { type: String, required: true },
    vehicle_class: { type: String },
    length: { type: Number },
    passengers: { type: Number },
    max_atmosphering_speed: { type: Number },
    cargo_capacity: { type: Number },
    consumables: { type: String }
}, { timestamps: true });

vehicleSchema.plugin(mongoosePaginate);

export default model('Vehicle', vehicleSchema);
