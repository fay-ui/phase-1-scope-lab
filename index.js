// Write your solution in this file!

// Declare customerName in global scope
var customerName = 'bob';

// Function to return the customerName
function getCustomerName() {
  return customerName;
}


function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}


function setBestCustomer() {
  var bestCustomer = 'not bob';
  window.bestCustomer = bestCustomer;
}


function overwriteBestCustomer(newBestCustomer) {
  window.bestCustomer = newBestCustomer;
}


function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = 'someone';
  leastFavoriteCustomer = 'someone else'; 
}