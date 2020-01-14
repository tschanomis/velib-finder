const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'sql7.freemysqlhosting.net',
  user     : 'sql7318880',
  password : 'klgEmqpQAt',
  database : 'sql7318880' 
});

module.exports  =  connection;