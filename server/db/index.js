var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
exports.connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'q',
  database: 'chat',
  port: '3306',

});


//exports.connection.connect();

exports.hello = function() {
  console.log('hello');
};



// var mysql = require('mysql');

// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".
// var connection = mysql.createConnection({
//   host: 'http://127.0.0.1:3000/',
//   user: 'root',
//   password: 'q',
//   database: 'chat'
// });


//  // connection.connect();


// module.exports = connection;