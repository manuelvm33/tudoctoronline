//import medical appointment model
const myMedical_appointmentModel = require('../model/medical_appointment');

//exports each function to complement the CRUD
exports.create = async (req,res)=>{
    try {
        let medical_appointment;
        medical_appointment = new myMedical_appointmentModel(req.body);
        console.log('funciton create medical_appointment => ' , medical_appointment);
        await medical_appointment.save();
        res.json(medical_appointment);
    } catch (error) {
        console.log('an error has ocurred while a medical apointment was created ', error);
        res.status(500).send('an error has ocurred while a medical apointment was created ');
    }
}

exports.getAll = async (req, res) =>{
    try {
        let medical_appointments = await myMedical_appointmentModel.find();
        res.json(medical_appointments);
    } catch (error) {
        console.log('an error has ocurred while the medical apointments were searched ', error);
        res.status(500).send('an error has ocurred while the medical apointments were searched ');
    }
}
exports.getById = async (req,res) => {
    try {
        let medical_appointmentFound = await myMedical_appointmentModel.findById(req.params._id);
        if(medical_appointmentFound != null){
            res.send(medical_appointmentFound);
        }else{
            res.status(404).json({'error': 'The medical apointment does not exist!'});
        }
    } catch (error) {
        console.log('an error has ocurred while the medical_appointment to delete was searched ', error);
        res.status(500).send('an error has ocurred while the medical_appointment to delete was searched');
    }
}

exports.update = async (req, res) => {
    try {
        let medical_appointmentToUpdate = await myMedical_appointmentModel.findById(req.params._id);
        console.log("medical_appointment found => " , medical_appointmentToUpdate);
        
        if(medical_appointmentToUpdate != null){
            await myMedical_appointmentModel.findByIdAndUpdate({_id:medical_appointmentToUpdate._id}, medical_appointmentToUpdate);
            res.json({'message': 'the medical_appointment has been updated succesfully'});
        }else{
            res.status(404).json({msg:'The medical appointment was not found!'});
        } 
    } catch (error) {
        console.log('an error has ocurred while the medical appointment to update was searched ', error);
        res.status(500).send('an error has ocurred while the medical appointment to update was searched');
    }
}

exports.delete = async (req,res) => {
    try {
        let medical_appointmentToDelete = await myMedical_appointmentModel.findById(req.params._id);
        if(medical_appointmentToDelete != null){
            await myMedical_appointmentModel.findByIdAndDelete(medical_appointmentToDelete._id);
            res.json('The medical_appointment has been removed successfully');
        }else{
            res.status(404).json({'error': 'The medical appointment does not exist!'});
        }
    } catch (error) {
        console.log('an error has ocurred while the medical appointment to delete was searched ', error);
        res.status(500).send('an error has ocurred while the medical appointment to delete was searched');
    }
}