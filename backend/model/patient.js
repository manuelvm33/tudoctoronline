const mongoose = require('mongoose');

const myPatientSchema = new mongoose.Schema({
    patient_id: Number,
    patient_name: String,
    patient_lastName: String,
    patient_email: String,
    patient_password: String
}, {
    versionKey: false
});

// Exports the schema
module.exports = mongoose.model('patient', myPatientSchema);