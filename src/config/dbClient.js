import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

class dbClient {
    constructor() {
        this.connectDB();
    }

    async connectDB() {
        const queryString = process.env.MONGO_URI
        await mongoose.connect(queryString);
    }

    async closeConexion() {
        try {
            await mongoose.disconnect();
            console.log("conexion a la bd cerrada");
        } catch (e) {
            console.log("error " + e);
        }
    }
}

export default new dbClient();