var express = require('express');
var router = express.Router();
var db = require('../database');

console.log("violence with skill");

router.get("/all", function(req, res) {
    ;
    db.Person.findAll()
        .then( persons => {
            res.status(200).send(JSON.stringify(persons));
        })
        .catch( err => {
            console.log('Some error',err)
            res.status(500).send(JSON.stringify(err));
        });
});

router.get("/:id", function(req, res) {
    db.Person.findByPk(req.params.id)
        .then( person => {
            res.status(200).send(JSON.stringify(person));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.put("/", function(req, res) {
    console.log("123213")
    db.Person.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        id: req.body.id
        })
        .then( person => {
            res.status(200).send(JSON.stringify(person));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.delete("/:id", function(req, res) {
    console.log("123213")
    db.Person.destroy({
        where: {
            id: req.params.id
        }
        })
        .then( () => {
            res.status(200).send();
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

module.exports = router;