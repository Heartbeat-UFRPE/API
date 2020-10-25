const fs = require("fs");
const fastcsv = require("fast-csv");

let stream = fs.createReadStream("./src/assets/Meals.csv");
let csvData = [];

const csvInBD = (connection) =>{
   let csvStream = fastcsv
  .parse()
  .on("data", function(data) {
    csvData.push(data)
  })
  .on("end", function() {
    const usingdb = `use db`;
    const createTableMeals = `CREATE TABLE IF NOT EXISTS Meals(
        type varchar(5),
        name varchar(120),
        calories int,
        type2 varchar(3)
    )`

    connection.query(usingdb,(err, result)=> {
        if(err) throw err;
        });

    connection.query(createTableMeals, (err, result)=> {
        if(err) throw err;
        });

    let query ="INSERT INTO Meals(type, name, calories, type2) values ?";

    connection.query('SELECT * from Meals', (err, res) => { 
          if (res.length == 0){
            connection.query(query, [csvData], (error, response) => {
                  });
              };
          });
      });

  stream.pipe(csvStream);
}


module.exports = {csvInBD}