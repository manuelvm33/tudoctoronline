const myMongoose = require('mongoose');

const mySpecialistCategorySchema  = myMongoose.Schema({
    category_id :Number,
    category_name :String,
},{
    versionKey:false
});

module.exports = myMongoose.model("specialist_categories", mySpecialistCategorySchema);