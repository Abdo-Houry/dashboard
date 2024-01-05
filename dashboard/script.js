let numberEmployees = document.getElementById("number-employees");
let numberCustomers = document.getElementById("number-customers");
let numberOrders = document.getElementById("number-orders");
// Get All Number Orders
fetch("http://arinc.somee.com/api/Orders/GetAll")
  .then(response => response.json())
  .then(data => {numberOrders.innerHTML = data.length})
// Get All Number Employees
fetch("http://arinc.somee.com/api/Employees/GetAll")
  .then(response => response.json())
  .then(data => {numberEmployees.innerHTML = data.length})
// Get All Number Clint
fetch("http://arinc.somee.com/api/Clients/GetAll")
  .then(response => response.json())
  .then(data => {numberCustomers.innerHTML = data.length})
