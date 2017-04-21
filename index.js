var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var config = require('./config');

var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());

//The test doesn't like the Sync version of connecting,
//  Here is a skeleton of the Async, in the callback is also
//  a good place to call your database seeds.
var db = massive.connect({
    connectionString: config.connString
  },
  function (err, localdb) {
    db = localdb;
    app.set('db', db);

    db.user_create_seed(function () {
      console.log("User Table Init");
    });
    db.vehicle_create_seed(function () {
      console.log("Vehicle Table Init")
    });

  })

var db = app.get('db');


var userCtrl = require('./userCtrl');


app.get('/api/users', userCtrl.getAllUsers);
app.get('/api/vehicles', userCtrl.getAllVehicles);
app.post('/api/users', userCtrl.addOneUser);
app.post('api/vehicles', userCtrl.addOneVehicle);
app.get('api/user/:userId/vehiclecount', userCtrl.countUserVehicles);
app.get('/api/user/:userId/vehicle', userCtrl.findVehiclesById);
app.get('/api/vehicle?email=UsersEmail', userCtrl.findVehiclesByEmail);
app.get('/api/vehicle?userFirstStart=letters', userCtrl.findVehiclesByLetter);
app.get('/api/newervehiclesbyyear', userCtrl.findVehiclesByYear);
app.put('/api/vehicle/:vehicleId/user/:userId', userCtrl.assignNewVehicleOwner);
app.delete('/api/user/:userId/vehicle/:vehicleId', userCtrl.deleteVehicleOwner);
app.delete('/api/vehicle/:vehicleId', userCtrl.deleteVehicle);



app.listen('3000', function () {
  console.log("Successfully listening on : 3000")
})

