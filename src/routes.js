const express = require('express');
const { connection } = require('../db');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.send('Servidor funcionando!')
});

routes.post('/user/update/email/:id',(req, res) => { //Atualização do email do usuário.
    connection.query(`SELECT * FROM Users WHERE id = ` + req.params.id,(err, result) => {
        if (result!= ""){
            connection.query('UPDATE Users SET email = ? WHERE id = ?',[req.body.email, req.params.id],(err, results) => {
                if(err) throw err;
                res.send("Email atualizado com sucesso.");
        })}
        else{
            res.send("Usuário não existe!");
        }
    });
});

routes.post('/user/update/password/:id',(req, res) => { //Atualização de senha do usuário.
    connection.query(`SELECT * FROM Users WHERE id = ` + req.params.id,(err, result) => {
        if (result!= ""){
            connection.query('UPDATE Users SET password = ? WHERE id = ?',[req.body.password, req.params.id],(err, results) => {
                if(err) throw err;
                res.send("Senha atualizada com sucesso.");
        })}
        else{
            res.send("Usuário não existe!");
        }
    });
});

routes.get('/user/delete/:id',(req, res) => { //Exclusão de usuário.
    connection.query(`SELECT * FROM Users WHERE id = ` + req.params.id,(err, result) => {
        if (result!= ""){
            connection.query('DELETE FROM Users WHERE id=' + req.params.id,(err, results) => {
                if(err) throw err;
                res.send("Usuário deletado com sucesso.");
        })}
        else{
            res.send("Usuario não existe!");
        }
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
