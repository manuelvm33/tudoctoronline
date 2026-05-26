const { default: mongoose } = require('mongoose');
const myMongoose = require('mongoose');

const myPatientSchema = myMongoose.Schema({
        patient_id: Number,
        patient_name: String,
        patient_lastName: String,
        patient_email:String,
        patient_password:String
},{
    versionKey:false
});

//exports the schema
module.exports = mongoose.model('patient',myPatientSchema);