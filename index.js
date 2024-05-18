const express = require('express');
const db = require('./config/database');
const catRouter = require('./routers/category.router');
const subcatRouter = require('./routers/subcategory.router');
const extraRouter = require('./routers/extracategory.router');
const app = express();
const port = 3000;

// database connection
db();
// body parser
app.use(express.urlencoded({extended : false}))
app.use(express.static('public'))

// set template engine
app.set('view engine', 'ejs');

// routes
app.get('/', (req, res) => {
    res.render('Pages/index')
})
app.use('/category', catRouter);
app.use('/subcategory', subcatRouter);
app.use('/extracategory', extraRouter);

// listen server
app.listen(port, (err) =>{
    if(err)throw err;
        console.log('server is started on http://localhost:3000');
})