# Star Wars Backend

## Descripción
Este es un backend desarrollado con Node.js, Express, MongoDB y Mongoose. Su función es poblar una base de datos con información de SWAPI y permitir operaciones CRUD sobre distintos modelos.

### La aplicación permite:

La aplicación permite realizar operaciones completas de CRUD (Crear, Leer, Actualizar y Eliminar) sobre diferentes modelos, incluyendo Characters, Films, Planets, Species, Starships y Vehicles. Los usuarios pueden consultar, crear, editar y eliminar registros de cada modelo.

## Requisitos previos
1. Tener npm
   - Para comprobar usar el comando:  npm -v o npm --version
2. Git — para clonar el repositorio
   - Para comprobar usar el comando: git --version
3. Node.js
   - Para comprobar usar el comando: node -v
4. MongoDB
   - Para comprobar usar el comando: mongod --version
5. MongoDB debe estar corriendo

## Cómo probar la aplicación

1. Clonar el repositorio
   
    git clone https://github.com/Edgar-Moises-L/backend-swapi.git

3. Instalar dependencias
   
   npm install

4. Asegurarse de que MongoDB esté corriendo

   mongod

5. Configurar variables de entorno ubicadas en el proyecto .env

   configurar segun sus especificaciones

   PORT = 5100

   MONGO_URI = mongodb://127.0.0.1:27017/star-wars
   
7. Ejecutar la aplicación
   
   Ubicado en el pryecto en la carpeta src ejecutar el comando
  
   node app.js

    
