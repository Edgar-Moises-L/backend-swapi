import { Schema, model } from "mongoose";

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

export default model('Vehicle', vehicleSchema);
