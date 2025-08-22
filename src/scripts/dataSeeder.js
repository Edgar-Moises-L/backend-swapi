import axios from "axios";

import Film from "../models/Film.js";
import Starship from "../models/Starship.js";
import Vehicle from "../models/Vehicle.js";
import Planet from "../models/Planet.js";
import Species from "../models/Species.js";
import Character from "../models/Character.js";

async function fetchData(endpoint) {
    const url = `https://swapi.info/api/${endpoint}/`;
    const res = await axios.get(url);
    return res.data;
}

export async function seedDatabase() {
    try {
        const filmCount = await Film.estimatedDocumentCount();
        if (filmCount === 0) {
            const films = await fetchData("films");
            const mappedFilms = films.map(f => ({
                title: f.title,
                director: f.director,
                producer: f.producer,
                release_date: f.release_date,
                filmUrl: f.url
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
                starshipUrl: ship.url
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
                length: Number(v.length) || 0,
                passengers: Number(v.passengers) || 0,
                max_atmosphering_speed: Number(v.max_atmosphering_speed) || 0,
                cargo_capacity: Number(v.cargo_capacity) || 0,
                consumables: v.consumables,
                vehicleUrl: v.url
            }));

            await Vehicle.insertMany(mappedVehicles, { ordered: false });
            console.log("Vehicles agregados a la BD");
        } else {
            console.log("La colección Vehicle ya tiene datos, no se insertó nada");
        }

        const planetCount = await Planet.estimatedDocumentCount();


        if (planetCount === 0) {
            const planets = await fetchData("planets");

            const mappedPlanets = planets.map(p => ({
                name: p.name,
                diameter: Number(p.diameter) || 0,
                rotation_period: Number(p.rotation_period) || 0,
                orbital_period: Number(p.orbital_period) || 0,
                gravity: p.gravity,
                surface_water: Number(p.surface_water) || 0,
                population: Number(p.population) || 0,
                climate: p.climate,
                terrain: p.terrain,
                residents: [],
                planetUrl: p.url

            }));

            const insertedPlanets = await Planet.insertMany(mappedPlanets, { ordered: false });



            console.log("Planets agregados a la BD");
        } else {
            console.log("La colección Planets ya tiene datos, no se insertó nada");
        }

        const speciesCount = await Species.estimatedDocumentCount();


        if (speciesCount === 0) {
            const species = await fetchData("species");

            const planets = await Planet.find({}, "planetUrl _id");
            const planetMap = {};
            planets.forEach(p => {
                planetMap[p.planetUrl] = p._id;
            });

            const mappedSpecies = species.map(s => ({
                name: s.name,
                classification: s.classification,
                designation: s.designation,
                average_height: Number(s.average_height) || 0,
                average_lifespan: Number(s.average_lifespan) || 0,
                eye_color: s.eye_colors,
                hair_color: s.hair_colors,
                skin_color: s.skin_colors,
                language: s.language,
                homeworld: planetMap[s.homeworld] || null,
                speciesUrl: s.url
            }));

            await Species.insertMany(mappedSpecies, { ordered: false });
            console.log("Species agregadas a la BD");
        } else {
            console.log("La colección Species ya tiene datos, no se insertó nada");
        }

        const characterCount = await Character.estimatedDocumentCount();

        if (characterCount === 0) {
            const characters = await fetchData("people");

            const planets = await Planet.find({}, "planetUrl _id");
            const planetMap = {};
            planets.forEach(p => {
                planetMap[p.planetUrl] = p._id;
            });

            const species = await Species.find({}, "speciesUrl _id");
            const speciesMap = {};
            species.forEach(s => {
                speciesMap[s.speciesUrl] = s._id;
            });

            const films = await Film.find({}, "filmUrl _id");
            const filmMap = {};
            films.forEach(f => {
                filmMap[f.filmUrl] = f._id;
            });

            const starships = await Starship.find({}, "starshipUrl _id");
            const starshipMap = {};
            starships.forEach(s => {
                starshipMap[s.starshipUrl] = s._id;
            });

            const vehicles = await Vehicle.find({}, "vehicleUrl _id");
            const vehicleMap = {};
            vehicles.forEach(v => {
                vehicleMap[v.vehicleUrl] = v._id;
            });

            const mappedCharacters = characters.map(c => ({
                name: c.name,
                birth_year: c.birth_year,
                eye_color: c.eye_color,
                gender: c.gender,
                hair_color: c.hair_color,
                height: Number(c.height) || 0,
                mass: Number(c.mass) || 0,
                skin_color: c.skin_color,
                homeworld: planetMap[c.homeworld] || null,
                species: speciesMap[c.species] || null,
                species: speciesMap[c.species?.[0]] || null,
                films: c.films.map(f => filmMap[f]).filter(Boolean),
                starships: c.starships.map(s => starshipMap[s]).filter(Boolean),
                vehicles: c.vehicles.map(v => vehicleMap[v]).filter(Boolean),
                characterUrl: c.url
            }));

    
            const insertedCharacters = await Character.insertMany(mappedCharacters, { ordered: false });
            console.log("Characters agregados a la BD");

            
            const planetResidentsMap = {}; 
            insertedCharacters.forEach(characters => {
                if (!characters.homeworld) return; 
                const planet = String(characters.homeworld);
                planetResidentsMap[planet] = planetResidentsMap[planet] || [];
                planetResidentsMap[planet].push(characters._id);
            });

            const planetIds = Object.keys(planetResidentsMap);
            for (const planet of planetIds) {
                const residentsArray = planetResidentsMap[planet];
                await Planet.updateOne(
                    { _id: planet },
                    { $addToSet: { residents: { $each: residentsArray } } }
                );
            }

        } else {
            console.log("La colección Character ya tiene datos, no se insertó nada");
        }



      

    } catch (err) {
        console.error("Error en seedDatabase:", err);
    }
}
