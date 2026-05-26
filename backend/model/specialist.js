const { default: mongoose } = require('mongoose');
const myMongoose = require('mongoose');

const mySpecialistSchema  = myMongoose.Schema({
    specialist_id :Number,
    specialist_name :String,
    specialist_lastName :String,
    specialist_email:String,
    specialist_category:[mongoose.Types.ObjectId]
},{
    versionKey:false
});

module.exports = myMongoose.model("specialist", mySpecialistSchema);