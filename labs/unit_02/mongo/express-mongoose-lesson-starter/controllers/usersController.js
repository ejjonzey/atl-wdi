var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// USERS INDEX ROUTE
router.get('/', (req, res) => {
    //console.log('hi');
    User.find({})
        .then((users) => {
            res.render('users/index', {
                users: users
            });
        })
        .catch((error) => {
            console.log(`error!!! ${error}`)
        });
});

router.get('/new', (req, res) => {
    res.render('users/new');
});

// USER CREATE ROUTE
router.post('/', (req, res) => {
    //res.send(req.body);
    const newUser = new User(req.body);
    newUser.save()
        .then((newUser) => {
            res.render('users/new', {
                user: newUser
            })
        })
        .catch((err) => {
            if (err) {
                console.log('there is error here');
            }
        })
})

// USER SHOW ROUTE
router.get('/:id', (req, res) => {
    Users.findById(req.params.id)
        .then((users) => {
            res.render('users/show', {
                user: user
            })
        })
});




// USER UPDATE ROUTE

// USER DESTROY
router.delete('/:id/delete', (req, res) => {
    const userIdToDelete = req.params.id;
    User.findByIdAndRemove(userIdToDelete)
        .then(() => {
            res.redirect('/users');
        })
})

// ADD A NEW ITEM

// REMOVE AN ITEM

module.exports = router;