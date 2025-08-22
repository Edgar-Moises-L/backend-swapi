import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const characterSchema = new Schema({
    name: { type: String, required: true, unique: true },
    birth_year: { type: String },
    eye_color: { type: String },
    gender: { type: String },
    hair_color: { type: String },
    height: { type: Number },
    mass: { type: Number },
    skin_color: { type: String },
    films: [{ type: Schema.Types.ObjectId, ref: "Film" }],
    homeworld: { type: Schema.Types.ObjectId, ref: "Planet" }, 
    species: { type: Schema.Types.ObjectId, ref: "Species" }, 
    starships: [{ type: Schema.Types.ObjectId, ref: "Starship" }],
    vehicles: [{ type: Schema.Types.ObjectId, ref: "Vehicle" }]
}, { timestamps: true });


characterSchema.plugin(mongoosePaginate);

export default model('Character', characterSchema);
