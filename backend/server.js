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
// Importar los CORS
const cors = require('cors');
myApp.use(cors());
//Here I use the routes
myApp.use(myRouter);

var whitelist = ['http://localhost:4000/', 'http://localhost:4200/', 'http://localhost:3000/'];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { Origin: true } // reflect (enable) the requested Origin in the CORS response
  }else{
    corsOptions = { Origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}



//Patients Controller 
const myPatientController = require('./control/patientController');
myRouter.get('/patient',cors(corsOptionsDelegate), myPatientController.getAll);
myRouter.get('/patient/:_id',cors(corsOptionsDelegate),myPatientController.getById);
myRouter.post('/patient',cors(corsOptionsDelegate),myPatientController.create);
myRouter.put('/patient/:_id',cors(corsOptionsDelegate),myPatientController.update);
myRouter.delete('/patient/:_id',cors(corsOptionsDelegate),myPatientController.delete);

//Specialist categories controller 
const myCategoriesController = require('./control/specialistCategoryController');
myRouter.get('/category',cors(corsOptionsDelegate),myCategoriesController.getAll);
myRouter.get('/category/:_id',cors(corsOptionsDelegate),myCategoriesController.getById);
myRouter.post('/category',cors(corsOptionsDelegate),myCategoriesController.create);
myRouter.put('/category/:_id',cors(corsOptionsDelegate),myCategoriesController.update);
myRouter.delete('/category/:_id',cors(corsOptionsDelegate),myCategoriesController.delete);

//Specialist  controller 
const mySpecialistController = require('./control/specialistController');
myRouter.get('/specialist',cors(corsOptionsDelegate),mySpecialistController.getAll);
myRouter.get('/specialist/:_id',cors(corsOptionsDelegate),mySpecialistController.getById);
myRouter.post('/specialist',cors(corsOptionsDelegate),mySpecialistController.create);
myRouter.put('/specialist/:_id',cors(corsOptionsDelegate),mySpecialistController.update);
myRouter.delete('/specialist/:_id',cors(corsOptionsDelegate),mySpecialistController.delete);

//Medical Appointment  controller 
const myMedicalAppointmentController = require('./control/medical_appointmentContoller');
myRouter.get('/medicalappointment',myMedicalAppointmentController.getAll);
myRouter.get('/medicalappointment/:_id',myMedicalAppointmentController.getById);
myRouter.post('/medicalappointment',myMedicalAppointmentController.create);
myRouter.put('/medicalappointment/:_id',myMedicalAppointmentController.update);
myRouter.delete('/medicalappointment/:_id',myMedicalAppointmentController.delete);



//Asignación del puerto para el servidor Web
myApp.listen(4000);

//Mensaje para confirmar que el servidro web esta activo
console.log('Servidor web ejecutandose desde: http://localhost:4000/');
console.log('"Ctrl + c" para finalizar el servidor web');

