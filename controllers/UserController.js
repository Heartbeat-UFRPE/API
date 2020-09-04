//const mysql = require('mysql');
const routes = require('../src/routes');
const db = require('../db');
const { connection } = require('../db');

// routes.post('/create', (req, res) => {
    
    // const user = {
    //     name: req.params.name,
    //     email: req.params.email,
    //     birth: req.params.birth,
    //     sex: req.params.sex,
    //     city: req.params.city,
    //     password: req.params.password
    // }
    
    // connection.query(`INSERT INTO Users(name, email, birth, sex, city, senha) VALUES
    // ('${user.name}','${user.email}','${user.birth}','${user.sex}','${user.city}','${user.senha}')`,)
    // console.log("Data inserted!");

    //}


    // routes.post("/create", function(req, res) {
    //     //var connection = db();
    
    //     var user = {
    //         name: req.params.name,
    //         email: req.params.email,
    //         birth: req.params.birth,
    //         sex: req.params.sex,
    //         city: req.params.city,
    //         password: req.params.password
    //     };
    
    //     connection.query('INSERT INTO users VALUES ?', user, function(error) {
    //         if (error) {
    //             console.log(error.message);
    //         } else {
    //             console.log('data inserted!');    
    //         }
    //     });
    // });
    