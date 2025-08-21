import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const characterSchema = new Schema({
    name: { type: String, required: true ,unique: true},
    birth_year: { type: String },
    eye_color: { type: String },
    gender: { type: String },
    hair_color: { type: String },
    height: { type: Number },
    mass: { type: Number },
    skin_color: { type: String },
    films: { type: String }, //falta relacionar
    homeworld: { type: String }, //falta relacionar
    species: { type: String }, //falta relacionar
    starships: { type: String }, //falta relacionar
    vehicles: { type: String } //falta relacionar
}, { timestamps: true });

characterSchema.plugin(mongoosePaginate);

export default model('Character', characterSchema);
