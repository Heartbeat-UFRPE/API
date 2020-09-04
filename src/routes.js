const express = require('express');
const { connection } = require('../db');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.send('Servidor funcionando!')
});

routes.post("/create", function(req, res) {
    var user = {
        name: req.body.name,
        email: req.body.email,
        birth: req.body.birth,
        sex: req.body.sex,
        city: req.body.city,
        password: req.body.password
    };

    connection.query('INSERT INTO users SET ?', user, function(error) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('data inserted!');    
        }
    });
});
module.exports = routes;