var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

// Location Pike Place Market
var pikePlace = {
  location: "Pike Place Market",
  minCustHour: 17,
  maxCustHour: 88,
  avgCookiesCust: 5.2,
  cookiesByHourList: [],

  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  },

  totalCookiesHour: function() {
    return Math.floor(this.randCustHour() * this.avgCookiesCust);
  },

  totalCookiesDay: function() {
    var dailyCookies = 0;
    for (var i = 0; i < 8; i++) {
        this.cookiesByHourList.push(this.totalCookiesHour());
        dailyCookies = dailyCookies + this.cookiesByHourList[i];
//        console.log (i+10);
//        console.log (dailyCookies);
      }
    return dailyCookies;

  },

  makeUL: function(array) {
    for(var i = 0; i < array.length; i++) {
        // connect the list to the JS; this is where your list will appear
        var hoursList = document.getElementById('pike');
        // Create the list item:
        var item = document.createElement('li');
        // Set its contents:
        item.appendChild(document.createTextNode(array[i] + ": " + this.cookiesByHourList[i] + " cookies"));
        // Add it to the list:
        hoursList.appendChild(item);
      }
  }

};
pikePlace.totalCookiesDay();
pikePlace.makeUL(hours);

// Location Seatac Airport
var seatacAirport = {
  location: "Seatac Airport",
  minCustHour: 6,
  maxCustHour: 44,
  avgCookiesCust: 1.2,
  cookiesByHourList: [],

  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  },

  totalCookiesHour: function() {
    return Math.floor(this.randCustHour() * this.avgCookiesCust);
  },

  totalCookiesDay: function() {
    var dailyCookies = 0;
    for (var i = 0; i < 8; i++) {
        this.cookiesByHourList.push(this.totalCookiesHour());
        dailyCookies = dailyCookies + this.cookiesByHourList[i];
      }
    return dailyCookies;
  },

  makeUL: function(array) {
    for(var i = 0; i < array.length; i++) {
        var hoursList = document.getElementById('seatac');
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i] + ": " + this.cookiesByHourList[i] + " cookies"));
        hoursList.appendChild(item);
      }
  }
};
seatacAirport.totalCookiesDay();
seatacAirport.makeUL(hours);

// Location South Center Mall
var southCenter = {
  location: "South Center Mall",
  minCustHour: 11,
  maxCustHour: 38,
  avgCookiesCust: 1.9,
  cookiesByHourList: [],

  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  },

  totalCookiesHour: function() {
    return Math.floor(this.randCustHour() * this.avgCookiesCust);
  },

  totalCookiesDay: function() {
    var dailyCookies = 0;
    for (var i = 0; i < 8; i++) {
        this.cookiesByHourList.push(this.totalCookiesHour());
        dailyCookies = dailyCookies + this.cookiesByHourList[i];
      }
    return dailyCookies;
  },

  makeUL: function(array) {
    for(var i = 0; i < array.length; i++) {
        var hoursList = document.getElementById('southcenter');
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i] + ": " + this.cookiesByHourList[i] + " cookies"));
        hoursList.appendChild(item);
      }
  }
};
southCenter.totalCookiesDay();
southCenter.makeUL(hours);

// Location Bellevue Square
var bellevueSquare = {
  location: "Bellevue Square",
  minCustHour: 20,
  maxCustHour: 48,
  avgCookiesCust: 3.3,
  cookiesByHourList: [],

  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  },

  totalCookiesHour: function() {
    return Math.floor(this.randCustHour() * this.avgCookiesCust);
  },

  totalCookiesDay: function() {
    var dailyCookies = 0;
    for (var i = 0; i < 8; i++) {
        this.cookiesByHourList.push(this.totalCookiesHour());
        dailyCookies = dailyCookies + this.cookiesByHourList[i];
      }
    return dailyCookies;
  },

  makeUL: function(array) {
    for(var i = 0; i < array.length; i++) {
        var hoursList = document.getElementById('bellevue');
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i] + ": " + this.cookiesByHourList[i] + " cookies"));
        hoursList.appendChild(item);
      }
  }
};
bellevueSquare.totalCookiesDay();
bellevueSquare.makeUL(hours);

// Location Alki Beach
var alkiBeach = {
  location: "Alki Beach",
  minCustHour: 3,
  maxCustHour: 24,
  avgCookiesCust: 2.6,
  cookiesByHourList: [],

  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  },

  totalCookiesHour: function() {
    return Math.floor(this.randCustHour() * this.avgCookiesCust);
  },

  totalCookiesDay: function() {
    var dailyCookies = 0;
    for (var i = 0; i < 8; i++) {
        this.cookiesByHourList.push(this.totalCookiesHour());
        dailyCookies = dailyCookies + this.cookiesByHourList[i];
      }
    return dailyCookies;
  },

  makeUL: function(array) {
    for(var i = 0; i < array.length; i++) {
        var hoursList = document.getElementById('alki');
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i] + ": " + this.cookiesByHourList[i] + " cookies"));
        hoursList.appendChild(item);
      }
  }
};
alkiBeach.totalCookiesDay();
alkiBeach.makeUL(hours);
