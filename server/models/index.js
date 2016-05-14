/*var db = require('../db/index.js');
db.connection.connect();

module.exports = {
  messages: {
    get: function (callback) {
      // db.connection.connect();
      db.connection.query('SELECT messages.text, messages.id, messages.roomname, users.username from messages left outer join users on (users.id = messages.userid) order by messages.id desc', function(err, rows, fields) {
        if (err) { console.log('error from the database', err); }
        //console.log('res is:', rows);
        callback(rows);
        // db.hello();
      });

      // use npm sql connection query database

      //select all from messages
      //db.connection.end();
     

    }, // a function which produces all the messages
    post: function (msgObj, callback) {
      console.log(msgObj);
      var query = "INSERT INTO `messages` (`text`, `userid`, `roomname`) VALUE ('" + msgObj.text + "',(select id from users where username = '" + msgObj.username + "' limit 1),'" + msgObj.roomname + "')";
      db.connection.query(query, function(err, rows, fields) {
        if (err) { console.log('error from the database', err); }
        //console.log('res is:', rows);
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
        //console.log(rows);
        callback(rows);
      });

      // db.connection.end();

    }
  }
};*/

var db = require('../db');

module.exports = {

  messages: {
    get: function (callback) {
      // fetch all messages
      // text, username, roomname, id
      var queryStr = 'select messages.id, messages.text, messages.roomname, users.username \
                      from messages left outer join users on (messages.userid = users.id) \
                      order by messages.id desc';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      // create a message for a user id based on the given username
      var queryStr = 'insert into messages(text, userid, roomname) \
                      value (?, (select id from users where username = ? limit 1), ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },
  users: {
    get: function (callback) {
      // fetch all users
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      // create a user
      var queryStr = 'insert into users(username) values (?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  }
};
