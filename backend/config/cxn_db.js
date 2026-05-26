const myMongoose = require('mongoose');
//import enviroment variables
require('dotenv').config({path:'var.env'});

//here I stablish connection with the database

const myConnectionDB = async()=>{
    try {
        await myMongoose.connect(process.env.URI_MONGODB)
        console.log('Now you are connected to the database');
    } catch (error) {
        console.log('There is a problem with database connection => ' + error);
        process.exit(1);
    }
}

//finally here I export the constant to will be visible in other scripts
module.exports = myConnectionDB;