import { Schema, model } from "mongoose";

const planetSchema = new Schema({
    name: { type: String, required: true },
    diameter: { type: Number },
    rotation_period: { type: Number },
    orbital_period: { type: Number },
    gravity: { type: String },
    surface_water: { type: Number },
    population: { type: Number },
    residents: { type: String }, //falta relacionar
    climate: { type: String },
    terrain: { type: String }
}, { timestamps: true });

export default model('Planet', planetSchema);
