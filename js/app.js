var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var pike = {
  minCust: 17,
  maxCust: 88,
  avgPerSale: 5.2,
  location: 'Pike Place',
  customers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  hourlyCustomers:[],
  totalCookiesPerHour: function(i) {
    return Math.floor((this.hourlyCustomers[i]) * pike.avgPerSale);
  },
  hourlyCookies:[]
};

for (var i = 0; i < 15; i++) {
  pike.hourlyCustomers.push(pike.customers());
};

for (var i = 0; i < 15; i++){
  pike.hourlyCookies.push(pike.totalCookiesPerHour(i));
};

for (var i = 0; i < 15; i++){
  var time = document.createElement('li');
  time.textContent = storeHours[i] + ' - ' + pike.hourlyCookies[i];
  pikeTime.appendChild(time);
};

var SeaTac = {
  minCust: 6,
  maxCust: 24,
  avgPerSale: 1.2,
  location: 'SeaTac Airport',
  customers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  hourlyCustomers:[],
  totalCookiesPerHour: function(i) {
    return Math.floor((this.hourlyCustomers[i]) * this.avgPerSale);
  },
  hourlyCookies:[]
};

for (var i = 0; i < 15; i++) {
  SeaTac.hourlyCustomers.push(SeaTac.customers());
};

for (var i = 0; i < 15; i++){
  SeaTac.hourlyCookies.push(SeaTac.totalCookiesPerHour(i));
};

for (var i = 0; i < 15; i++){
  var time = document.createElement('li');
  time.textContent = storeHours[i] + ' - ' + SeaTac.hourlyCookies[i];
  SeatacTime.appendChild(time);
};

var SouthCenter = {
  minCust: 11,
  maxCust: 38,
  avgPerSale: 1.9,
  location: 'SouthCenter',
  customers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  hourlyCustomers:[],
  totalCookiesPerHour: function(i) {
    return Math.floor((this.hourlyCustomers[i]) * this.avgPerSale);
  },
  hourlyCookies:[]
};

for (var i = 0; i < 15; i++) {
  SouthCenter.hourlyCustomers.push(SouthCenter.customers());
};

for (var i = 0; i < 15; i++){
  SouthCenter.hourlyCookies.push(SouthCenter.totalCookiesPerHour(i));
};

for (var i = 0; i < 15; i++){
  var time = document.createElement('li');
  time.textContent = storeHours[i] + ' - ' + SouthCenter.hourlyCookies[i];
  SouthTime.appendChild(time);
};

var Bellevue = {
  minCust: 20,
  maxCust: 48,
  avgPerSale: 3.3,
  location: 'Bellevue Square',
  customers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  hourlyCustomers:[],
  totalCookiesPerHour: function(i) {
    return Math.floor((this.hourlyCustomers[i]) * this.avgPerSale);
  },
  hourlyCookies:[]
};

for (var i = 0; i < 15; i++) {
  Bellevue.hourlyCustomers.push(Bellevue.customers());
};

for (var i = 0; i < 15; i++){
  Bellevue.hourlyCookies.push(Bellevue.totalCookiesPerHour(i));
};

for (var i = 0; i < 15; i++){
  var time = document.createElement('li');
  time.textContent = storeHours[i] + ' - ' + Bellevue.hourlyCookies[i];
  BellevueTime.appendChild(time);
};

var Alki = {
  minCust: 3,
  maxCust: 24,
  avgPerSale: 2.6,
  location: 'Alki',
  customers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  hourlyCustomers:[],
  totalCookiesPerHour: function(i) {
    return Math.floor((this.hourlyCustomers[i]) * this.avgPerSale);
  },
  hourlyCookies:[]
};

for (var i = 0; i < 15; i++) {
  Alki.hourlyCustomers.push(Alki.customers());
};

for (var i = 0; i < 15; i++){
  Alki.hourlyCookies.push(Alki.totalCookiesPerHour(i));
};

for (var i = 0; i < 15; i++){
  var time = document.createElement('li');
  time.textContent = storeHours[i] + ' - ' + Alki.hourlyCookies[i];
  AlkiTime.appendChild(time);
};
