import { Schema, model } from "mongoose";

const filmSchema = new Schema(
    {
        title: { type: String, required: true },
        director: { type: String, required: true },
        producer: { type: String, required: true }
        
    }, { timestamps: true }
)

export default model('Film', filmSchema)