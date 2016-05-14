var models = require('../models');
var app = require('../app.js');

module.exports = {
  messages: {
    get: function (req, res) {
      // gets request and determines what to query database with

      // calls model function with request data

      // grabs data model from model function and passes it to res object to send back to client
      models.messages.get( function(data) {
        res.status(200).send(data);
      });
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // gets post request and parses out message
      console.log('this is req:', req);
      console.log('this is JSON:', req.json);

      // calls the model function with messages and callsback

      // receives confirmation from callback and sends response
      models.messages.post(req.body, function(data) {
        res.status(201).send(data);
      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get( req.body, function(data) {
        res.status(200).send(data);
      });


    },
    post: function (req, res) {
      console.log('this is req:', req);
      console.log('this is body:', req.body);
      models.users.post( req.body, function(data) {
        res.status(201).send(data);
      });
    }
  }
};



