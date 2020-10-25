const express = require('express');
const routes = require('./routes')
const app = express();
var cors = require('cors')
//const port = process.ENV || 4444;


app.use(express.json());
app.use(routes);
app.use(cors())
  

app.listen(4444,()=>{
    console.log(`Runing on ip localhost:4444`);
});
    
// app.listen(port, '192.168.100.5',()=>{
//      console.log('Runing on ip 192.168.100.5:4444');
//  });
