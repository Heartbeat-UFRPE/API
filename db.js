const db = require('mysql');

const connection = db.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: ''
});

const creationdb = `create database if not exists db;`;
const usingdb = `use db`;
const creatingtable = `CREATE TABLE if not exists Users (
    id int not null auto_increment,
    name varchar(50),
    email varchar(50),
    birth date,
    sex enum('F','M'),
    city varchar(30),
    password varchar(15),
    primary key(id)
)`;

connection.connect(function(err){
    if(err) return console.log(err);
    console.log('conected!');
    
    connection.query(creationdb,(err, result)=> {
        if(err) throw err;
        console.log("Database created");
    })

    connection.query(usingdb,(err, result)=> {
        if(err) throw err;
    })

    connection.query(creatingtable,(err, result)=> {
        if(err) throw err;
        console.log("Table created");
    })
})

module.exports ={connection}