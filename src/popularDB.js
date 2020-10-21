const popularTableUsers = `INSERT INTO Users VALUES 
(default,'João','joao@gmail.com','1985-04-23',1, 'jakdf8888'),
(default,'Clara','clara@gmail.com','1990-07-10',0, '4K8811'),
(default,'Cintia','cintia@gmail.com','1997-01-31',0,'1111111'),
(default,'Christian','christian@gmail.com','1989-11-30',1,'22222222'),
(default,'josé','josé@gmail.com','1978-02-23',1,'121212121'),
(default,'Joaquim','jquim@gmail.com','1985-02-23',1,'asfd#$&%')`;     //Usuários para teste.


const popularTableAnamnesia = `INSERT INTO Anamnesia VALUES
(default, 4,'175','78','1','0','0','0','12','1','0','1'),
(default, 6,'160','74','0','1','1','5','8','1','1','0'),
(default, 1,'187','60','1','0','1','7','5','0','0','1'),
(default, 2,'194','99','1','1','0','0','9','0','1','0'),
(default, 5,'174','81','0','1','0','8','7','1', '1','1'),
(default, 3,'169','70','1','1','1','4','10','0','0','1');`

module.exports = {tableUsers: popularTableUsers, tableAnamnesia:popularTableAnamnesia };
