import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const starshipSchema = new Schema({
    name: { type: String, required: true, unique: true},
    model: { type: String, required: true },
    starship_class: { type: String },
    length: { type: Number },
    passengers: { type: Number },
    max_atmosphering_speed: { type: Number },
    hyperdrive_rating: { type: Number },
    MGLT: { type: Number },
    cargo_capacity: { type: Number },
    consumables: { type: String },
    starshipUrl: { type: String, select: false }
}, { timestamps: true });

starshipSchema.plugin(mongoosePaginate);

export default model('Starship', starshipSchema);
