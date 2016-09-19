todo web app

1. usa mysql bd "uno" y tabla "todo" creada manualmente - psw hola
create table todo
(id int not null auto_increment primary key,asunto varchar(80),deleted bool default false);

2. express - static route en "localhost:3000" devuelve "default.htm"

3. front end: al capturar el campo de texto "asunto" y presionar boton "submit",
graba en la tabla un registro nuevo.