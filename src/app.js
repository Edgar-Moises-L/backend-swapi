import 'dotenv/config';
import filmRoute from './routes/filmRoute.js'
import characterRoute from './routes/characterRoute.js'
import planetRoute from './routes/planetRoute.js'
import speciesRoute from './routes/speciesRoute.js'
import express from 'express';
import dbClient from './config/dbClient.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/films', filmRoute);
app.use('/api/characters', characterRoute);
app.use('/api/planets', planetRoute);
app.use('/api/species', speciesRoute)

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log('Servidor activo en el puerto ' + PORT));
} catch (e) {
    console.log(e);
}

process.on('SIGINT', async () => {
    dbClient.closeConexion();
    process.exit(0);
})