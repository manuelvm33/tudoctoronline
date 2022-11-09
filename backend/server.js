/**
 * Importamos el modulo de express.
 */
const express = require('express');
//importamos las variables de entorno
require('dotenv').config({path:'var.env'});
//importamos el conector para MongoDB
const myMongoose = require('mongoose');
/**
 * La anterior fue la forma de importar express, tambien se puede asi:
 * Otra forma de importarlo como se hace en js
 *      import express from 'express'
 */

/**
 * Para utilizar los metodos HTTP post, get, etc debemos establecer rutas
 * Para establecer las rutas debemos establecer una constante, en este caso myRouter
 * es importante que esto se haga ANTES de inicializar express.
 */
const myRouter = express.Router();

//importamos la conecion a la base de datos:
const myConnectionToMongoDB = require('./config/cxn_db');

//para inicializar express
let myApp = express();
//to deserialize JSON documents
myApp.use(express.json());
//establish connection to the database
myConnectionToMongoDB();

//Here I use the routes
myApp.use(myRouter);
//Patients Controller 
const myPatientController = require('./control/patientController');
myRouter.get('/patient',myPatientController.getAll);
myRouter.get('/patient/:_id',myPatientController.getById);
myRouter.post('/patient',myPatientController.create);
myRouter.put('/patient/:_id',myPatientController.update);
myRouter.delete('/patient/:_id',myPatientController.delete);

//Specialist categories controller 
const myCategoriesController = require('./control/specialistCategoryController');
myRouter.get('/category',myCategoriesController.getAll);
myRouter.get('/category/:_id',myCategoriesController.getById);
myRouter.post('/category',myCategoriesController.create);
myRouter.put('/category/:_id',myCategoriesController.update);
myRouter.delete('/category/:_id',myCategoriesController.delete);

//Specialist  controller 
const mySpecialistController = require('./control/specialistController');
myRouter.get('/specialist',mySpecialistController.getAll);
myRouter.get('/specialist/:_id',mySpecialistController.getById);
myRouter.post('/specialist',mySpecialistController.create);
myRouter.put('/specialist/:_id',mySpecialistController.update);
myRouter.delete('/specialist/:_id',mySpecialistController.delete);

//Asignación del puerto para el servidor Web
myApp.listen(4000);

//Mensaje para confirmar que el servidro web esta activo
console.log('Servidor web ejecutandose desde: http://localhost:4000/');
console.log('"Ctrl + c" para finalizar el servidor web');

