var models = require('../models');
var app = require('../app.js');

module.exports = {
  messages: {
    get: function (req, res) {
      // gets request and determines what to query database with

      // calls model function with request data

      // grabs data model from model function and passes it to res object to send back to client
      models.messages.get( function(data) {
        res.status(200).send(JSON.stringify(data));
      });
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // gets post request and parses out message
      
      // calls the model function with messages and callsback

      // receives confirmation from callback and sends response
      models.messages.post(req.body, function() {
        res.send('hello');
      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {



    },
    post: function (req, res) {

    }
  }
};



