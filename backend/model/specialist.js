const mongoose = require('mongoose');

const mySpecialistSchema = new mongoose.Schema({
    specialist_id: Number,
    specialist_name: String,
    specialist_lastName: String,
    specialist_email: String,
    specialist_category: [mongoose.Types.ObjectId]
}, {
    versionKey: false
});

module.exports = mongoose.model("specialist", mySpecialistSchema);