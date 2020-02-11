# hotel
React Front - check cheapest option available




Requisitos 
Crear un proyecto React que muestre la opción más barata para dormir en un hotel en una fecha y un número de noches introducidos por el usuario. 
Uso: 

1. El usuario elige el hotel (de entre 3 posibles) 
2. Introduce la fecha de checkin (un input normal vale) 
3. Introduce el número de noches 
4. Al pulsar un botón “Buscar”, se mostrará: 
● Nombre de la habitación 
● Si la hay, nombre de la oferta (offerName) 
● Régimen (board) 
● Ocupación (occupancy) 
● Precio neto 

5. Si no hay tarifas disponibles, o no se han rellenado todos los datos, mostrar un 
mensaje: “Lo sentimos, no hay tarifas disponibles” 
Validaciones: 
● No se puede introducir una fecha de checkin anterior al día en curso 
● No se pueden pedir más de 30 noches de estancia 
Cómo hacerlo 
El usuario puede elegir entre tres hoteles, que son: 
● Hotel Baqueira Val de Neu (44069509) 
● Hotel Moderno (10030559) 
● Hotel Grand Luxor (100376478) 
Los datos se obtienen de este servicio: 
https://api-pre.mirai.com/MiraiWebService/availableRate/get 
Parámetro Formato 
hotelId Number 
checkin DD/MM/AAAA 
nights Number 
El servicio requiere Basic Auth: 
username 'user1' 
password 'user1Pass' 
Por ejemplo: 
https://api-pre.mirai.com/MiraiWebService/availableRate/get?hotelId=10030559&checkin=01/01 /2020&nights=2 
El servicio devuelve un listado de tarifas (una tarifa es la combinación de una habitación, un régimen y una ocupación) en formato JSON. 
Nos gustaría ver: 
● Un buen dominio de JavaScript y React 
● Buen manejo de los ciclos de vida de los componentes 
● Código ordenado, fácil de leer y mantener 
No hace falta: 
● Montar un servidor o una configuración complicada. Puedes usar cualquier boilerplate 
● Una interfaz bonita ni CSS avanzado. Con que sea funcional es suficiente 
● Hacer a mano lo que se puede coger de una librería 
● Subir una demo funcional. Con la dirección del repo es suficiente 
 



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
