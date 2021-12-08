function lifeInWeeks(deathAge, age) {

  //var deathAge = 70;
  var yearsLeftToLive;
  var monthsLeftToLive;
  var weeksLeftToLive;
  var daysLeftToLive;

  yearsLeftToLive = parseInt(deathAge) - parseInt(age) ;
  monthsLeftToLive = yearsLeftToLive * 12;
  weeksLeftToLive = yearsLeftToLive * 52;
  daysLeftToLive = yearsLeftToLive * 365;
  alert("You have " + daysLeftToLive + " days, " + weeksLeftToLive + " weeks, or " + monthsLeftToLive + " months left to live until you will die at the age of " + deathAge + ". Happy Holidays!");
  //console.log("You have " + daysLeftToLive + " days, " + weeksLeftToLive + " weeks, and " + monthsLeftToLive + " months left.");
}

var deathAge = prompt("At what age you think you will die? ");
var yourAge = prompt("Enter your age: ");

lifeInWeeks(deathAge, yourAge);