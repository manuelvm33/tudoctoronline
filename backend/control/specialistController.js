//import patient model
const mySpecialistModel = require('../model/specialist');

//exports each function to complement the CRUD
exports.create = async (req,res)=>{
    try {
        let specialist;
        specialist = new mySpecialistModel(req.body);
        console.log('funciton create specialist => ' , specialist);
        await specialist.save();
        res.json(specialist);
    } catch (error) {
        console.log('an error has ocurred while a specialist was created ', error);
        res.status(500).send('an error has ocurred while a specialist was created ');
    }
}

exports.getAll = async (req, res) =>{
    try {
        let specialist = await mySpecialistModel.find();
        res.json(specialist);
    } catch (error) {
        console.log('an error has ocurred while the specialists were searched ', error);
        res.status(500).send('an error has ocurred while the specialists were searched ');
    }
}
exports.getById = async (req,res) => {
    try {
        let specialistFound = await mySpecialistModel.findById(req.params._id);
        if(specialistFound != null){
            res.send(specialistFound);
        }else{
            res.status(404).json({'error': 'The specialist does not exist!'});
        }
    } catch (error) {
        console.log('an error has ocurred while the specialist to delete was searched ', error);
        res.status(500).send('an error has ocurred while the specialist to delete was searched');
    }
}

exports.update = async (req, res) => {
    try {
        let specialistToUpdate = await mySpecialistModel.findById(req.params._id);
        console.log("specialist found => " , specialistToUpdate);
        
        if(specialistToUpdate != null){
            await mySpecialistModel.findByIdAndUpdate({_id:specialistToUpdate._id}, specialistToUpdate);
            res.json({'message': 'the specialist has been updated succesfully'});
        }else{
            res.status(404).json({msg:'The specialist was not found!'});
        } 
    } catch (error) {
        console.log('an error has ocurred while the specialist to update was searched ', error);
        res.status(500).send('an error has ocurred while the specialist to update was searched');
    }
}

exports.delete = async (req,res) => {
    try {
        let specialistToDelete = await mySpecialistModel.findById(req.params._id);
        if(specialistToDelete != null){
            await mySpecialistModel.findByIdAndDelete(specialistToDelete._id);
            res.json('The specialist has been removed successfully');
        }else{
            res.status(404).json({'error': 'The specialist does not exist!'});
        }
    } catch (error) {
        console.log('an error has ocurred while the specialist to delete was searched ', error);
        res.status(500).send('an error has ocurred while the specialist to delete was searched');
    }
}