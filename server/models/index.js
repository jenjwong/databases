var db = require('../db/index.js');
db.connection.connect();

module.exports = {
  messages: {
    get: function (callback) {
      // db.connection.connect();
      db.connection.query('SELECT * from messages', function(err, rows, fields) {
        if (err) { console.log('error from the database', err); }
        console.log('res is:', rows);
        callback(rows);
        // db.hello();
      });

      // use npm sql connection query database

      //select all from messages
      //db.connection.end();
     

    }, // a function which produces all the messages
    post: function (msgObj, callback) {
      var query = "INSERT INTO `messages` (`text`, `roomname`) VALUES ('" + msgObj.text + "','" + msgObj.username + "')";
      db.connection.query(query, function(err, rows, fields) {
        if (err) { console.log('error from the database', err); }
        console.log('res is:', rows);
        callback(rows);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (msgObj, callback) {
      var query = "SELECT * FROM users";
      db.connection.query(query, function(err, rows, fields) {
        if (err) { console.log('error from database', err); }
        callback(rows);
      });

      // db.connection.end();
    },
    post: function (msgObj, callback) {
      console.log('hello');
      var query = "INSERT INTO `users` (`username`) VALUES ('" + msgObj.username + "')";
         // var query = "INSERT INTO `users` (`username`) VALUES ('jenjwong')";
      db.connection.query(query, function(err, rows, fields) {
        if (err) { console.log('error from database', err); }
        console.log(rows);
        callback(rows);
      });

      // db.connection.end();

    }
  }
};

