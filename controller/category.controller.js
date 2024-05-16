const category = require("../models/category.schema");

const create = async (req, res) => {
    console.log(req.body)
    let data = await category.create(req.body);
    res.redirect('back');
}
// module.exports = {create};/

const get = async (req, res) => {
    let data = await category.find()
    res.send(data);
    // res.render('pages/category',{data});
}

const table = async (req, res) => {
    try {
        const categories = await category.find()
        res.render('Pages/categoryTable', { categories: categories })
    } catch (error) {
        console.log(error)
    }
}
const form = async (req, res) => {
    try {
        res.render('Pages/addCategoryForm')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { create, get, table, form };