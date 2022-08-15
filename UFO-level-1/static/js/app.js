// from data.js
var tableData = data;

// YOUR CODE HERE!
// reference html elements
var tbody = d3.select("tbody");
var button = d3.select("#button");
var form = d3.select("#form");

// Create table of all data
tableData.forEach((alienReport) => {
  var row = tbody.append("tr");
  Object.entries(alienReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Create event handlers 
button.on("click", runFilter);
form.on("submit", runFilter);

function runFilter(){
  var filterInput = d3.select("#datetime").property("value");
  tbody.html("");
  d3.event.preventDefault();
  var filteredData = tableData.filter(x => x.datetime === filterInput);
  // console.log(filterInput)
  // console.log(filteredData)
  filteredData.forEach((alienReport) => {
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}