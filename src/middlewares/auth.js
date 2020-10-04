const authConfig = require('../config/auth.json')
const { connection } = require('../../db');
const jwt = require('jsonwebtoken');

function autenticarToken(req, res, next) {
  
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    })
  
};


function generateToken(req, res, next) {
    
    connection.query(`SELECT name,email,birth FROM Users WHERE email = ? AND password = ?`, [req.body.email,req.body.password], (err, result) => {
        if (err) throw err;

        if(!result){
          res.status(400).send({error:"User not found"})
        }

        const token = jwt.sign({id:result.id},authConfig.secret,{
            expiresIn:'365d'
        })
        
        req.token = token;
        req.user  = result;
        next();
          
      });

  
};


exports.generateToken = generateToken;