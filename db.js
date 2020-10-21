const db = require('mysql');
const modulo = require('./src/popularDB');
const {csvInBD} = require('./src/meals')

//Dados da conexão
const connection = db.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: ''
});

    const creationdb = `create database if not exists db;`; 
    const usingdb = `use db`;
    const createTableUser = `CREATE TABLE if not exists Users (
        id int not null auto_increment,
        name varchar(100) not null,
        email varchar(50) not null,
        birth date not null,
        sex int not null,
        password varchar(15) not null,
        primary key(id)
    )`;
    //Criação da tabela da Anamnese
    const createTableAnamnesia = `CREATE TABLE IF NOT EXISTS Anamnesia ( 
        id int not null auto_increment,
        userID int not null,
        height int not null,
        weight int not null,
        highPressure int not null,
        heartDiseases int not null,
        physicalActivity int not null,
        stress int not null,
        HoursSleep int not null,
        anaemia int not null,
        smoking int not null,
        diabetes int not null,

        PRIMARY KEY(id),
        FOREIGN KEY (userID) REFERENCES Users(id)
    )`

    const createTablePressure = `CREATE TABLE IF NOT EXISTS Pressure(
        id int not null auto_increment,
        userID int not null,
        value varchar(7) not null,

        PRIMARY KEY(id),
        FOREIGN KEY(userID) references Users(id)
    )`

    const createTableWeight = `CREATE TABLE IF NOT EXISTS Weight(
        id int not null auto_increment,
        userID int not null,
        value float not null,

        PRIMARY KEY(id),
        FOREIGN KEY(userID) references Users(id)
    )`

        connection.connect(function(err){ //Erro de conexão
        if(err) return console.log(err);
        
        connection.query(creationdb,(err, result)=> {//Erro de criação do DB
            if(err) throw err;
        });

        connection.query(usingdb,(err, result)=> {//Erro de uso do BD
            if(err) throw err;
        });

        connection.query(createTableUser,(err, result)=> {//Erro de criação da tabela usuário 
            if(err) throw err;
        });

        connection.query(createTableAnamnesia,(err, result)=> {//Erro criação da tabela Anamnese
            if(err) throw err;
        });

        connection.query(createTablePressure, (err, result) => {
            if(err) throw err;
        });

        connection.query(createTableWeight, (err, result) => {
            if(err) throw err;
        });

        connection.query('SELECT * from Users', (err, res) => { //Erro de tamanho zero
            if (res.length == 0){
                connection.query(modulo.tableUsers,(err, result)=> {
                    if(err) throw err;
                }
            )};
        });

        connection.query('SELECT * from Anamnesia', (err, res) => { 
            if (res.length == 0){
                connection.query(modulo.tableAnamnesia,(err, result)=> {
                    if(err) throw err;
                }
            )};
        })
        csvInBD(connection);
    });

module.exports ={connection}
