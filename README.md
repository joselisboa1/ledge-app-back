## ledge-app-back
La app funciona para visualizar cualquier video con una URL accesible, la base de datos guarda esa URL y sus visualizaciones correspondientes para luego poder acceder a las visualizaciones correspondientes de esa URL y no de otra. Se tiene un video de youtube por default con un contador.

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
## Endpoints
Se tienen los siguientes endpoints y funcionalidades:
```
GET /visualization
```
Retorna todos valores de la tabla visualizations. (URL y count)
```
GET /visualization/:cleaned_link
```
cleaned_link es la URL pero solo manteniendo letras y números, se hizo así ya que este endpoint usa findOrCreate, es decir, si no se había visualizado esa URL se crea en la base de datos con count 0.
```
POST /visualization/:id
```
Siendo id el id de la entrada de visualizations, se suma 1 al valor de count.
## Link al deploy
https://ledge-app-back.onrender.com
