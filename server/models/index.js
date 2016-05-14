var db = require('../db/index.js');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.connect();
      db.connection.query('SELECT * from messages', function(err, rows, fields) {
        if (err) { console.log('error from the database', err); }
        console.log('res is:', rows);
        callback(rows);
        // db.hello();
      });

      // use npm sql connection query database

      //select all from messages
      //db.connection.end();
      db.connection.end();

    }, // a function which produces all the messages
    post: function (msgObj, callback) {
      db.connection.connect();

      db.hello();
      var query = "INSERT INTO messages (text, roomname) VALUES (" + 'jenjwong' + "," + 'other jenjwong' + ")";
      db.connection.query(query, function(err, rows, fields) {
        if (err) { console.log('error from the database', err); }
        console.log('res is:', rows);
        callback(rows);
      });
      db.connection.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      // db.query('SELECT * FROM `users`', function (error, results, fields) {
      //   if (error) {
      //     console.log('!!!!!!!!!! this is our test', error);
      //   } else {
      //     console.log('!!!!!!!!!!!!! this is our test', results);
      //   }
      // });

    },
    post: function () {

    }
  }
};

