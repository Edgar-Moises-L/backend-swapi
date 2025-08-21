import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const speciesSchema = new Schema({
    name: { type: String, required: true, unique: true },
    classification: { type: String },
    designation: { type: String },
    average_height: { type: Number },
    average_lifespan: { type: Number },
    eye_color: { type: String },
    hair_color: { type: String },
    skin_color: { type: String },
    language: { type: String },
    homeworld: { type: Schema.Types.ObjectId, ref: "Planet"  }
}, { timestamps: true });

speciesSchema.plugin(mongoosePaginate);

export default model('Species', speciesSchema);
