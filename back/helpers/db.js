const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'testtest',
  database : 'velib'
});
module.exports  =  connection;