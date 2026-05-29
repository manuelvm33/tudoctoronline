const myMongoose = require('mongoose');

// Import environment variables
require('dotenv').config({ path: 'var.env' });

// Establish connection with the database
const myConnectionDB = async () => {
    try {
        await myMongoose.connect(process.env.URI_MONGODB);
        console.log('Now you are connected to the database');
    } catch (error) {
        console.log('There is a problem with database connection => ' + error);
        process.exit(1);
    }
};

// Export the function to be visible in other scripts
module.exports = myConnectionDB;