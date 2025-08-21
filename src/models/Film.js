import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';


const filmSchema = new Schema(
    {
        title: { type: String, required: true },
        director: { type: String, required: true },
        producer: { type: String, required: true }

    }, { timestamps: true }
);

filmSchema.plugin(mongoosePaginate);

export default model('Film', filmSchema);