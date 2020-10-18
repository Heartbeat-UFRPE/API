const express = require('express');
const { connection } = require('../db');
const routes = express.Router();
const gerarToken = require('./middlewares/auth').generateToken
const jwt = require('jsonwebtoken');
const authConfig = require('./config/auth.json')


routes.get('/', (req, res) => {
    return res.send('Servidor funcionando!')
});

routes.get('/pressure/:userID', (req, res) => {
    connection.query(`SELECT * FROM Pressure WHERE userID = ?  ORDER BY id DESC LIMIT 7`, req.params.userID, (err, result) => {
        if (err) throw err;
          res.send(result);
      });
});

routes.post('/pressure/register',(req, res) => {
    var pressure = {
        userID: req.body.userID,
        value: req.body.value
    };

    connection.query('INSERT INTO Pressure SET ?', pressure,(error) => {
        if (error) {
            console.log(error.message);
        } else { 
            res.send(pressure);  
        }
    });
});

routes.get('/weight/:userID', (req, res) => {
    connection.query(`SELECT * FROM Weight WHERE userID = ? ORDER BY id DESC LIMIT 7`, req.params.userID, (err, result) => {
        if (err) throw err;
          res.send(result);
      });
});

routes.post('/weight/register',(req, res) => {
    var weight = {
        userID: req.body.userID,
        value: req.body.value
    };

    connection.query('INSERT INTO Weight SET ?', weight,(error) => {
        if (error) {
            console.log(error.message);
        } else { 
            res.send(weight);  
        }
    });
});

routes.post('/user/update/email/:id',(req, res) => { //Atualização do email do usuário.
    connection.query(`SELECT * FROM Users WHERE id = ?`, req.params.id,(err, result) => {
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
    connection.query(`SELECT * FROM Users WHERE id = ? `, req.params.id,(err, result) => {
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
    connection.query(`SELECT * FROM Users WHERE id = ? `, req.params.id,(err, result) => {
        if (result!= ""){
            connection.query('DELETE FROM Users WHERE id= ?' ,req.params.id,(err, results) => {
                if(err) throw err;
                res.send("Usuário deletado com sucesso.");
        })}
        else{
            res.send("Usuario não existe!");
        }
    });
});

routes.get('/user/:id', (req, res) => {
    connection.query(`SELECT * FROM Users WHERE id = ? `, req.params.id, (err, result) => {
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


routes.post("/user/create",(req, res) => {
    var user = {
        name: req.body.name,
        email: req.body.email,
        birth: req.body.birth,
        sex: req.body.sex,
        password: req.body.password
    };

    connection.query('INSERT INTO Users SET ?', user,(error,result) => {
        if (error) {
            console.log(error.message);
        } else { 
            const token = jwt.sign({id:result.insertId},authConfig.secret,{
                expiresIn:'365d'
            })
            delete user.password;
            res.send({token:token,user:user});  
        }
    });
});

routes.get("/cardapio",(req,res)=>{

    //template do 
    let cardapio = {
        "segunda":{
            "cafe":[{"comida": "pao" , "quantidade": "1x" , "kcal" : 65 },{"comida": "broa" , "quantidade": "1x" , "kcal" : 65 }],
            "almoco":[{"comida": "pao" , "quantidade": "1x" , "kcal" : 65 },{"comida": "broa" , "quantidade": "1x" , "kcal" : 65 }],
            "jantar":[{"comida": "pao" , "quantidade": "1x" , "kcal" : 65 },{"comida": "broa" , "quantidade": "1x" , "kcal" : 65 }],
        },
        "terca":{
            "cafe":[{"comida": "pao" , "quantidade": "1x" , "kcal" : 65 },{"comida": "broa" , "quantidade": "1x" , "kcal" : 65 }],
            "almoco":[{"comida": "pao" , "quantidade": "1x" , "kcal" : 65 },{"comida": "broa" , "quantidade": "1x" , "kcal" : 65 }],
            "jantar":[{"comida": "pao" , "quantidade": "1x" , "kcal" : 65 },{"comida": "broa" , "quantidade": "1x" , "kcal" : 65 }],
        },
        "quarta":{
            "cafe":[{"comida": "pao" , "quantidade": "1x" , "kcal" : 65 },{"comida": "broa" , "quantidade": "1x" , "kcal" : 65 }],
            "almoco":[{"comida": "pao" , "quantidade": "1x" , "kcal" : 65 },{"comida": "broa" , "quantidade": "1x" , "kcal" : 65 }],
            "jantar":[{"comida": "pao" , "quantidade": "1x" , "kcal" : 65 },{"comida": "broa" , "quantidade": "1x" , "kcal" : 65 }],
        },
        "quinta":{
            "cafe":[{"comida": "pao" , "quantidade": "1x" , "kcal" : 65 },{"comida": "broa" , "quantidade": "1x" , "kcal" : 65 }],
            "almoco":[{"comida": "pao" , "quantidade": "1x" , "kcal" : 65 },{"comida": "broa" , "quantidade": "1x" , "kcal" : 65 }],
            "jantar":[{"comida": "pao" , "quantidade": "1x" , "kcal" : 65 },{"comida": "broa" , "quantidade": "1x" , "kcal" : 65 }],
        },
        "sexta":{
            "cafe":[{"comida": "pao" , "quantidade": "1x" , "kcal" : 65 },{"comida": "broa" , "quantidade": "1x" , "kcal" : 65 }],
            "almoco":[{"comida": "pao" , "quantidade": "1x" , "kcal" : 65 },{"comida": "broa" , "quantidade": "1x" , "kcal" : 65 }],
            "jantar":[{"comida": "pao" , "quantidade": "1x" , "kcal" : 65 },{"comida": "broa" , "quantidade": "1x" , "kcal" : 65 }],
        },
        "sabado":{
            "cafe":[{"comida": "pao" , "quantidade": "1x" , "kcal" : 65 },{"comida": "broa" , "quantidade": "1x" , "kcal" : 65 }],
            "almoco":[{"comida": "pao" , "quantidade": "1x" , "kcal" : 65 },{"comida": "broa" , "quantidade": "1x" , "kcal" : 65 }],
            "jantar":[{"comida": "pao" , "quantidade": "1x" , "kcal" : 65 },{"comida": "broa" , "quantidade": "1x" , "kcal" : 65 }],
        },
        "domingo":{
            "cafe":[{"comida": "pao" , "quantidade": "1x" , "kcal" : 65 },{"comida": "broa" , "quantidade": "1x" , "kcal" : 65 }],
            "almoco":[{"comida": "pao" , "quantidade": "1x" , "kcal" : 65 },{"comida": "broa" , "quantidade": "1x" , "kcal" : 65 }],
            "jantar":[{"comida": "pao" , "quantidade": "1x" , "kcal" : 65 },{"comida": "broa" , "quantidade": "1x" , "kcal" : 65 }],
        },
    }
})

routes.post("/login",gerarToken,(req,res) => {

    res.send({ token: req.token,user:req.user })

});



module.exports = routes;
