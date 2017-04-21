var app = require("./index");
var db = app.get('db');

module.exports = {
    getAllUsers: function (req, res, next) {
        db.get_all_users(function (err, users) {
            res.status(200).send(users);
        })
    },

    getAllVehicles: function (req, res, next) {
        db.get_all_vehicles(function (err, vehicles) {
            res.status(200).send(vehicles);
        })
    },

    addOneUser: function (req, res, next) {
        var firstName = req.query.firstname;
        var lastName = req.query.lastname;
        var email = req.query.email;
        db.add_one_user([firstName, lastName, email], function (err, users) {
            res.status(200).send('user updated!');
        });
    },

    addOneVehicle: function (req, res, next) {
        var make = req.query.make;
        var model = req.query.model;
        var yr = req.query.yr;
        var ownerId = req.query.ownerId;
        db.add_one_vehicle([make, model, yr, ownerId], function(err, vehicle){
        res.status(200).send('Vehicle updated!');

        })
    },

    countUserVehicles: function (req, res, next) {
        res.status(200).send();
    },

    findVehiclesById: function (req, res, next) {
        res.status(200).send();
    },

    findVehiclesByEmail: function (req, res, next) {
        res.status(200).send();
    },

    findVehiclesByLetter: function (req, res, next) {
        res.status(200).send();
    },

    findVehiclesByYear: function (req, res, next) {
        res.status(200).send();
    },

    assignNewVehicleOwner: function (req, res, next) {
        res.status(200).send();
    },

    deleteVehicleOwner: function (req, res, next) {
        res.status(200).send();
    },

    deleteVehicle: function (req, res, next) {
        res.status(200).send();
    }

}