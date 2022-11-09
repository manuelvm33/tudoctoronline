const { default: mongoose } = require('mongoose');
const myMongoose = require('mongoose');

const myMedicalAppointment  = myMongoose.Schema({
    medical_appointment_id :Number,
    medical_appointment_fechahora: Date,
    patient_id: [mongoose.Types.ObjectId],
    specialist_id: [mongoose.Types.ObjectId]
},{
    versionKey:false
});

module.exports = myMongoose.model("medical_appointment", myMedicalAppointment);