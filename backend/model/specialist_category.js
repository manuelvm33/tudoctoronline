const mongoose = require('mongoose');

const mySpecialistCategorySchema = new mongoose.Schema({
    category_id: Number,
    category_name: String
}, {
    versionKey: false
});

module.exports = mongoose.model("specialist_categories", mySpecialistCategorySchema);