var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var allStores = [];
var appendRows = document.getElementById('append-rows');

function Store(location,min,max,avgPerSale) {
  this.storeLocation = location;
  this.min = min;
  this.max = max;
  this.avgPerSale = avgPerSale;
  this.dailyTotal = 0;
  this.avgCustomer = avgCustomer(this.min,this.max);
  this.hourlyCustomers = [];
  this.hourlyCookies = [];
  for (var i = 0; i < storeHours.length; i++) {
    this.hourlyCustomers.push(avgCustomer(min, max));
  };
  for (var i = 0; i < storeHours.length; i++){
    this.hourlyCookies.push(totalCookiesPerHour(this.hourlyCustomers[i], this.avgPerSale));
    this.dailyTotal += this.hourlyCookies[i];
  };
};

function avgCustomer(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function totalCookiesPerHour(hourlyCustomers, avgPerSale) {
  return Math.floor(hourlyCustomers * avgPerSale);
};

function time() {
  var tr = document.createElement('tr');
  var empty = document.createElement('td');
  tr.appendChild(empty);
  for (var i = 0; i < storeHours.length; i++) {
    var th = document.createElement('th');
    th.textContent = storeHours[i];
    tr.appendChild(th);
  }
  var totalCookie = document.createElement('th');
  totalCookie.textContent = 'Total';
  tr.appendChild(totalCookie);
  appendRows.appendChild(tr);
}

function data(store) {
  var tr = document.createElement('tr');
  var nameCell = document.createElement('td');
  nameCell.textContent = store.storeLocation;
  tr.appendChild(nameCell);
  for (var i = 0; i < store.hourlyCookies.length; i++) {
    var td = document.createElement('td');
    td.textContent = store.hourlyCookies[i];
    tr.appendChild(td);
  };
  var total = document.createElement('td');
  total.textContent = store.dailyTotal;
  tr.appendChild(total);
  appendRows.appendChild(tr);
}

// for (i = 0; i < storeHours.length; i++) {
//   time(Store[i]);
// }

allStores.push(new Store('Pike Place',17,88,5.2));
allStores.push(new Store('SeaTac Airport',6,24,1.2));
allStores.push(new Store('Southcenter',11,38,1.9));
allStores.push(new Store('Bellevue',20,48,3.3));
allStores.push(new Store('Alki',3,24,2.6));

time();
for (i = 0; i < allStores.length; i++) {
  data(allStores[i]);
}
  //
  // for (var i = 0; i < 15; i++){
  //   var time = document.createElement('li');
  //   time.textContent = storeHours[i] + ' - ' + pike.hourlyCookies[i];
  //   pikeTime.appendChild(time);
  // };
  //
  // var pikTotal = document.createElement('li');
  // pikTotal.textContent = 'total= ' + pike.dailyTotal;
  // pikeTime.appendChild(pikTotal);

// var SeaTac = {
//   minCust: 6,
//   maxCust: 24,
//   avgPerSale: 1.2,
//   location: 'SeaTac Airport',
//   dailyTotal: 0,
//   customers: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   hourlyCustomers:[],
//   totalCookiesPerHour: function(i) {
//     return Math.floor((this.hourlyCustomers[i]) * this.avgPerSale);
//   },
//   hourlyCookies:[]
// };
//
// for (var i = 0; i < 15; i++) {
//   SeaTac.hourlyCustomers.push(SeaTac.customers());
// };
//
// for (var i = 0; i < 15; i++){
//   SeaTac.hourlyCookies.push(SeaTac.totalCookiesPerHour(i));
//   SeaTac.dailyTotal += SeaTac.hourlyCookies[i];
// };
//
// for (var i = 0; i < 15; i++){
//   var time = document.createElement('li');
//   time.textContent = storeHours[i] + ' - ' + SeaTac.hourlyCookies[i];
//   SeatacTime.appendChild(time);
// };
//
// var SeaTacTotal = document.createElement('li');
// SeaTacTotal.textContent = 'total= ' + SeaTac.dailyTotal;
// SeatacTime.appendChild(SeaTacTotal);
//
// var SouthCenter = {
//   minCust: 11,
//   maxCust: 38,
//   avgPerSale: 1.9,
//   location: 'SouthCenter',
//   dailyTotal: 0,
//   customers: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   hourlyCustomers:[],
//   totalCookiesPerHour: function(i) {
//     return Math.floor((this.hourlyCustomers[i]) * this.avgPerSale);
//   },
//   hourlyCookies:[]
// };
//
// for (var i = 0; i < 15; i++) {
//   SouthCenter.hourlyCustomers.push(SouthCenter.customers());
// };
//
// for (var i = 0; i < 15; i++){
//   SouthCenter.hourlyCookies.push(SouthCenter.totalCookiesPerHour(i));
//   SouthCenter.dailyTotal += SouthCenter.hourlyCookies[i];
// };
//
// for (var i = 0; i < 15; i++){
//   var time = document.createElement('li');
//   time.textContent = storeHours[i] + ' - ' + SouthCenter.hourlyCookies[i];
//   SouthTime.appendChild(time);
// };
//
// var SouthCenterTotal = document.createElement('li');
// SouthCenterTotal.textContent = 'total= ' + SouthCenter.dailyTotal;
// SouthTime.appendChild(SouthCenterTotal);
//
// var Bellevue = {
//   minCust: 20,
//   maxCust: 48,
//   avgPerSale: 3.3,
//   location: 'Bellevue Square',
//   dailyTotal: 0,
//   customers: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   hourlyCustomers:[],
//   totalCookiesPerHour: function(i) {
//     return Math.floor((this.hourlyCustomers[i]) * this.avgPerSale);
//   },
//   hourlyCookies:[]
// };
//
// for (var i = 0; i < 15; i++) {
//   Bellevue.hourlyCustomers.push(Bellevue.customers());
// };
//
// for (var i = 0; i < 15; i++){
//   Bellevue.hourlyCookies.push(Bellevue.totalCookiesPerHour(i));
//   Bellevue.dailyTotal += Bellevue.hourlyCookies[i];
// };
//
// for (var i = 0; i < 15; i++){
//   var time = document.createElement('li');
//   time.textContent = storeHours[i] + ' - ' + Bellevue.hourlyCookies[i];
//   BellevueTime.appendChild(time);
// };
//
// var BellevueTotal = document.createElement('li');
// BellevueTotal.textContent = 'total= ' + Bellevue.dailyTotal;
// BellevueTime.appendChild(BellevueTotal);
//
// var Alki = {
//   minCust: 3,
//   maxCust: 24,
//   avgPerSale: 2.6,
//   location: 'Alki',
//   dailyTotal: 0,
//   customers: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   hourlyCustomers:[],
//   totalCookiesPerHour: function(i) {
//     return Math.floor((this.hourlyCustomers[i]) * this.avgPerSale);
//   },
//   hourlyCookies:[]
// };
//
// for (var i = 0; i < 15; i++) {
//   Alki.hourlyCustomers.push(Alki.customers());
// };
//
// for (var i = 0; i < 15; i++){
//   Alki.hourlyCookies.push(Alki.totalCookiesPerHour(i));
//   Alki.dailyTotal += Alki.hourlyCookies[i];
// };
//
// for (var i = 0; i < 15; i++){
//   var time = document.createElement('li');
//   time.textContent = storeHours[i] + ' - ' + Alki.hourlyCookies[i];
//   AlkiTime.appendChild(time);
// };
//
// var AlkiTotal = document.createElement('li');
// AlkiTotal.textContent = 'total= ' + Alki.dailyTotal;
// AlkiTime.appendChild(AlkiTotal);
