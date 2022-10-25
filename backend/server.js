
//Importar el módulo de express
//forma convencional de nodejs
const express = require('express');
//otra forma de javascript
//import { Express } from 'express';


//para establecer las rutas de express
const router = express.Router();


//para inicializar express
let app = express();

//-----------------------------------------------------------
//prueba minima para saber que funciona el módulo de express
//en relacion al entorno web (ejecutar el servidor web)
/*app.use('/', function(req, rest){
    rest.send("Hola Mundo...")
});*/
//arrow function
//app.use('/', (req, rest) =>{
//    rest.send("Utilizndo la funcion de flecha ...");
//});
//-------------------------------------------------------------

//-------------------------------------------------------------------
// Para utilizar los metodos http => GET, POST , PUT , DELETE, UPDATE
//const router = express.Router(); => agregada en la linea 10 antes de inicilizar
app.use(router);

router.get('/mensaje', (req,res) => {
    res.send('Mensaje con método GET');
});
//-------------------------------------------------------------------
router.post('/mensaje', (req,res)=> {
    res.send('Mensaje con el método POST');
})



//Asignación del puerto para el servidor Web
app.listen(4000);

//Mensaje para confirmar que el servidro web esta activo
console.log('Servidor web ejecutandose desde: http://localhost:4000/');
console.log('"Ctrl + c" para finalizar el servidor web');

