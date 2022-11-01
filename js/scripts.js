// Business Logic for Ticket
function Ticket() {
  this.movie = "";
  this.time = "";
  this.age = "";
  this.price = 0;
}

// let movies = {};
// let theShining = new Ticket()
// movies["theShining] = theShining;

Ticket.prototype.addMovie = function(movieSelection) {
  let addMovie = '';
  if (parseInt(movieSelection) === 0) {
    addMovie = "The Shining";
  } else if (parseInt(movieSelection) === 1) {
    addMovie = "The Excorcist";
  } else if (parseInt(movieSelection) === 2) {
    addMovie = "Chucky";
  }
  this.movie = addMovie;
};

Ticket.prototype.addTime = function(timeSelection) {
  let addTime = '';

  if (parseInt(timeSelection) === 0) {
    addTime = "1:00";
  } else if (parseInt(timeSelection) === 1) {
    addTime = "3:30"; 
  } else if (parseInt(timeSelection) === 2) {
    addTime = "7:00";
  }
  this.time = addTime;
}

Ticket.prototype.addAge = function(ageSelection) {
  let addedAge = '';
  if (parseInt(ageSelection) === 0) {
    addAge = "youth (0-13)";
  } else if (parseInt(ageSelection) === 1) {
    addAge = "adult (14-65)";
  } else if (parseInt(timeSelection) === 2) {
    addAge = "senior (65+)";
  }
  this.age = addAge;
}

Ticket.prototype.addPrice = function(movie, time, age) {
  let addPrice = 25;
  let priceArray = time.split(":");

  if (parseInt(priceArray[0]) <= 3 && parseInt(priceArray[1]) === 0) {
    addPrice -= 8;
  }
  if (age === "youth (0-13)" || age === "senior (65+)") {
    addPrice -= 10;
  }
  if (movie === "The Excorcist") {
    addPrice += 5;
  }
  this.price = addPrice;
}
