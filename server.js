var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var reservations = [];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});


app.post("/api/tables", function(req, res) {
 
  var newReservations = req.body;

  console.log(newReservations);

  reservations.push(newReservations);

  res.json(newReservations);
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
