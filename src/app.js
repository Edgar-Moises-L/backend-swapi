import 'dotenv/config';
import filmRoute from './routes/filmRoute.js'
import characterRoute from './routes/characterRoute.js'
import planetRoute from './routes/planetRoute.js'
import speciesRoute from './routes/speciesRoute.js'
import starshipRoute from './routes/starshipRoute.js';
import vehicleRoute from './routes/vehicleRoute.js'
import express from 'express';
import cors from 'cors';   // 👈 Importa cors
import dbClient from './config/dbClient.js'
import { seedDatabase } from './scripts/dataSeeder.js';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));


app.use('/api/films', filmRoute);
app.use('/api/characters', characterRoute);
app.use('/api/planets', planetRoute);
app.use('/api/species', speciesRoute);
app.use('/api/starships', starshipRoute);
app.use('/api/vehicles', vehicleRoute);

async function startServer() {
  try {
    await dbClient.connectDB(); 
    await seedDatabase();   

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log('Servidor activo en el puerto ' + PORT));
  } catch (e) {
    console.log(e);
  }
}

startServer();

process.on('SIGINT', async () => {
    dbClient.closeConexion();
    process.exit(0);
});
