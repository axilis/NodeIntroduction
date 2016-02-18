var express = require('express');
var router = express.Router();

var Role = require('../models/role');
var User = require('../models/user');
var Activities = require('../models/activities.js');

router.get('/', function(req, res, next) {
    res.render('index', { name: User.name, list: Activities.list, role: Role.name });
});

router.get('/new', function(req, res, next) {
    if (!req.query.name || !req.query.age) {
        res.status(400).send('User information not provided!');
        return;
    }
    var newGuy = new User({
      name: req.query.name,
      age: req.query.age
    });
    newGuy.save(function(err) {
      if (err) {
          res.status(500).send('Oops, something went wrong!');
          throw err;
      } else {
          res.send('User saved!');
      }
    });
});

router.get('/users', function(req, res, next) {
    User.find({}, function(err, users) {
        if (err) {
            res.status(500).send('Oops, something went wrong!');
            throw err;
        } else {
            res.render('users', { users: users });
        }
    });
});

module.exports = router;
