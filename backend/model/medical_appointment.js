const mongoose = require('mongoose');

const myMedicalAppointmentSchema = new mongoose.Schema({
    medical_appointment_id: Number,
    medical_appointment_fechahora: Date,
    patient_id: [mongoose.Types.ObjectId],
    specialist_id: [mongoose.Types.ObjectId]
}, {
    versionKey: false
});

module.exports = mongoose.model("medical_appointment", myMedicalAppointmentSchema);