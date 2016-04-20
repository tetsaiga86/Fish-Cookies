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

allStores.push(new Store('Pike Place',17,88,5.2));
allStores.push(new Store('SeaTac Airport',6,24,1.2));
allStores.push(new Store('Southcenter',11,38,1.9));
allStores.push(new Store('Bellevue',20,48,3.3));
allStores.push(new Store('Alki',3,24,2.6));

time();
for (i = 0; i < allStores.length; i++) {
  data(allStores[i]);
}
