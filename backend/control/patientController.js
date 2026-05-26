//import patient model
const myPatientModel = require('../model/patient');

//exports each function to complement the CRUD
exports.create = async (req,res)=>{
    try {
        let patient;
        patient = new myPatientModel(req.body);
        console.log('funciton create patient => ' , patient);
        await patient.save();
        res.json(patient);
    } catch (error) {
        console.log('an error has ocurred while a patient was created ', error);
        res.status(500).send('an error has ocurred while a patient was created ');
    }
}

exports.getAll = async (req, res) =>{
    try {
        let patients = await myPatientModel.find();
        res.json(patients);
    } catch (error) {
        console.log('an error has ocurred while the patients were searched ', error);
        res.status(500).send('an error has ocurred while the patients were searched ');
    }
}
exports.getById = async (req,res) => {
    try {
        let patientFound = await myPatientModel.findById(req.params._id);
        if(patientFound != null){
            res.send(patientFound);
        }else{
            res.status(404).json({'error': 'The patient does not exist!'});
        }
    } catch (error) {
        console.log('an error has ocurred while the patient to delete was searched ', error);
        res.status(500).send('an error has ocurred while the patient to delete was searched');
    }
}

exports.update = async (req, res) => {
    try {
        let patientToUpdate = await myPatientModel.findById(req.params._id);
        console.log("patient found => " , patientToUpdate);
        
        if(patientToUpdate != null){
            await myPatientModel.findByIdAndUpdate({_id:patientToUpdate._id}, patientToUpdate);
            res.json({'message': 'the patient has been updated succesfully'});
        }else{
            res.status(404).json({msg:'The patient was not found!'});
        } 
    } catch (error) {
        console.log('an error has ocurred while the patient to update was searched ', error);
        res.status(500).send('an error has ocurred while the patient to update was searched');
    }
}

exports.delete = async (req,res) => {
    try {
        let patientToDelete = await myPatientModel.findById(req.params._id);
        if(patientToDelete != null){
            await myPatientModel.findByIdAndDelete(patientToDelete._id);
            res.json('The patient has been removed successfully');
        }else{
            res.status(404).json({'error': 'The patient does not exist!'});
        }
    } catch (error) {
        console.log('an error has ocurred while the patient to delete was searched ', error);
        res.status(500).send('an error has ocurred while the patient to delete was searched');
    }
}