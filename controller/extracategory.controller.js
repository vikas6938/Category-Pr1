const extracategory = require("../models/extracategory.schema");


const create = async (req, res) => {
    try {
        let data = await extracategory.create(req.body);
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}
const get = async (req, res) => {
    try {
        let data = await extracategory.find().populate({
            path: 'subCategoryID',
            populate: {
                path: 'categoryID'
            }
        }
        )
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}
const table = async (req, res) => {
    try {
        const extracategories = await extracategory.find().populate({
            path:'subCategoryID',
            populate:{
                path:'categoryID'
            }
        });
        res.render('Pages/extracategoryTable', { extracategories: extracategories })
    } catch (error) {
        console.log(error)
    }
}
const form = async (req, res) => {
    try {
        res.render('Pages/addExtraCategroryForm')
    } catch (error) {
        console.log(error)
    }
}
module.exports = { create, get, table, form };