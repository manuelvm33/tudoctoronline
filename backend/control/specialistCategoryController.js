//import category model
const mySpecialistCategoryModel = require('../model/specialist_category');

//exports each function to complement the CRUD
exports.create = async (req,res)=>{
    try {
        let category;
        category = new mySpecialistCategoryModel(req.body);
        console.log('funciton create category => ' , category);
        await category.save();
        res.json(category);
    } catch (error) {
        console.log('an error has ocurred while a category was created ', error);
        res.status(500).send('an error has ocurred while a category was created ');
    }
}

exports.getAll = async (req, res) =>{
    try {
        let category = await mySpecialistCategoryModel.find();
        res.json(category);
    } catch (error) {
        console.log('an error has ocurred while the categories were searched ', error);
        res.status(500).send('an error has ocurred while the categories were searched ');
    }
}
exports.getById = async (req,res) => {
    try {
        let categoryFound = await mySpecialistCategoryModel.findById(req.params._id);
        if(categoryFound != null){
            res.send(categoryFound);
        }else{
            res.status(404).json({'error': 'The category does not exist!'});
        }
    } catch (error) {
        console.log('an error has ocurred while the category to delete was searched ', error);
        res.status(500).send('an error has ocurred while the patient to delete was searched');
    }
}

exports.update = async (req, res) => {
    try {
        let categoryToUpdate = await mySpecialistCategoryModel.findById(req.params._id);
        console.log("category found => " , categoryToUpdate);
        
        if(categoryToUpdate != null){
            await mySpecialistCategoryModel.findByIdAndUpdate({_id:categoryToUpdate._id}, categoryToUpdate);
            res.json({'message': 'the category has been updated succesfully'});
        }else{
            res.status(404).json({msg:'The category was not found!'});
        } 
    } catch (error) {
        console.log('an error has ocurred while the category to update was searched ', error);
        res.status(500).send('an error has ocurred while the category to update was searched');
    }
}

exports.delete = async (req,res) => {
    try {
        let categoryToDelete = await mySpecialistCategoryModel.findById(req.params._id);
        if(categoryToDelete != null){
            await mySpecialistCategoryModel.findByIdAndDelete(categoryToDelete._id);
            res.json('The category has been removed successfully');
        }else{
            res.status(404).json({'error': 'The category does not exist!'});
        }
    } catch (error) {
        console.log('an error has ocurred while the category to delete was searched ', error);
        res.status(500).send('an error has ocurred while the category to delete was searched');
    }
}