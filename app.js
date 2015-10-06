// Location Pike Place Market
var pikePlace = {
  location: "Pike Place Market",
  minCustHour: 17,
  maxCustHour: 88,
  avgCookiesCust: 5.2,
  //pikeHours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],

  //calculate random number of customers per hour based on min/max
  randCustHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

//totalCookiesHour = randCustHour * avgCookiesCust;

//makeUL = function

//function makeUL(array) {
//      for (var i = 0; i < array.length; i++) {
//    }

};

