const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const layout = require('./views/layout');
const { db, User, Page } = require('./models');
const users = require('./routes/users');
const wiki = require('./routes/wiki');
//const views = require('./views');
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.json());

app.use(express.urlencoded({extended: false}));
 
app.use('/users', users);

app.use('/wiki', wiki);

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  });

app.get('/', (req, res) => {
    res.redirect('/wiki');
});

const init = async () => {
    try {
        await db.sync({force: true});
        
        const PORT = 8080;

        app.listen(PORT, () => {
        console.log('Its working');
});
    } catch (error) {
        console.log(error);
    }
};

init();

// const PORT = 8080;

// app.listen(PORT, () => {
//     console.log('Its working');
// });

//module.exports = app;