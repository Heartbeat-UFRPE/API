const express = require('express');
const { connection } = require('../db');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.send('Servidor funcionando!')
});

routes.get('/user/delete/:id',(req, res) => {
    connection.query('DELETE FROM Users WHERE id=' + req.params.id,(err, results) => {
    if(err) throw err;
    res.send("Usuário deletado com sucesso.");
    });
});

routes.get('/user/:id', (req, res) => {
    connection.query(`SELECT * FROM Users WHERE id = ` + req.params.id, (err, result) => {
        if (err) throw err;
          res.send(result);
      });
});

routes.get('/users', (req, res) => {
    connection.query("SELECT * FROM Users", (err, result) => {
      if (err) throw err;
        res.send(result);
    });
});


routes.post("/user/create", (req, res) => {
    var user = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        birth: req.body.birth,
        sex: req.body.sex,
        password: req.body.password
    };

    connection.query('INSERT INTO Users SET ?', user,(error) => {
        if (error) {
            console.log(error.message);
        } else { 
            res.send(user);  
        }
    });
});

module.exports = routes;