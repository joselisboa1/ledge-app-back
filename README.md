## ledge-app-back

Para la ejecución del backend se deben realizar los siguientes pasos.

## Crear base de datos y archivo .env

Se debe crear una base de datos para asignarle los siguientes valores al.env,
En local
```
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=
```
Para el deploy en render se deben agregarclos siguientes valores al .env,
```
DB_HOST=
DATABASE_URL=
DB_PORT=
```
## Instalar dependencias

Para instalar las dependencias necesarias se usa el comando:
```
npm install
```
## Ejecutar el backend
Primero se crea la base de datos y se migra:
```
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```
Para ejecutar el backend se utiliza el comando:
```
node server.js
```
## Link al deploy
https://ledge-app-back.onrender.com
