const express = require('express');
const routes = require('./routes')
const app = express();

require('dotenv').configure()

app.use(express.json());
app.use(routes);

app.post("/login", (req,res) => {
  //Autenticação de usuário
  const username = req.body.username
  const usuario = { nome: username }
  const tokenAcesso = jwt.sign(usuario, process.env.ACCESS_TOKEN_SECRET)
  res.json({ accessToken: tokenAcesso })
  });

app.get('/users', autenticarToken, (req, res) => {
  res.json(users,filter(users => users.ususario === req.usuario.name))};

function autenticarToken (req, res, nex) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)
  
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>
    if (err) return res.sendStatus(403)
    req.user = user
    next()

app.listen(4444, '192.168.100.5',()=>{
    console.log('Runing on ip 192.168.100.5:3333');
});
