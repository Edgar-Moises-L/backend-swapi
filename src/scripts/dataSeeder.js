import axios from "axios";

import Film from "../models/Film.js";
import Starship from "../models/Starship.js";
import Vehicle from "../models/Vehicle.js";

async function fetchData(endpoint) {
    const url = `https://swapi.info/api/${endpoint}/`;
    const res = await axios.get(url);
    return res.data;
}

export async function seedDatabase() {
    try {
        console.log("hola")
        const filmCount = await Film.estimatedDocumentCount();
        if (filmCount === 0) {
            const films = await fetchData("films");
            const mappedFilms = films.map(film => ({
                title: film.title,
                director: film.director,
                producer: film.producer,
                release_date: film.release_date,
            }));
            await Film.insertMany(mappedFilms, { ordered: false });
            console.log("Films agregadas a la BD");
        }

        const starshipCount = await Starship.estimatedDocumentCount();
        if (starshipCount === 0) {
            const starships = await fetchData("starships");
            const mappedStarships = starships.map(ship => ({
                name: ship.name,
                model: ship.model,
                starship_class: ship.starship_class,
                length: Number(ship.length) || 0,
                passengers: Number(ship.passengers) || 0,
                max_atmosphering_speed: Number(ship.max_atmosphering_speed) || 0,
                hyperdrive_rating: Number(ship.hyperdrive_rating) || 0,
                MGLT: Number(ship.MGLT) || 0,
                cargo_capacity: Number(ship.cargo_capacity) || 0,
                consumables: ship.consumables,
            }));
            await Starship.insertMany(mappedStarships, { ordered: false });
            console.log("Starships agregadas a la BD");
        }

        const vehicleCount = await Vehicle.estimatedDocumentCount();

        if (vehicleCount === 0) {
            const vehicles = await fetchData("vehicles");
            const mappedVehicles = vehicles.map(v => ({
                name: v.name,
                model: v.model,
                vehicle_class: v.vehicle_class,
                length: v.length ,
                passengers: v.passengers,
                max_atmosphering_speed: v.max_atmosphering_speed,
                cargo_capacity: v.cargo_capacity,
                consumables: v.consumables,
            }));

            await Vehicle.insertMany(mappedVehicles, { ordered: false });
            console.log("Vehicles agregados a la BD");
        } else {
            console.log("La colección Vehicle ya tiene datos, no se insertó nada");
        }

    } catch (err) {
        console.error("Error en seedDatabase:", err);
    }
}
