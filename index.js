// Write your solution in this file!

var customerName = "Erin";

function upperCaseCustomerName(name) {
  let firstLetter = customerName.charAt(0).toUpperCase()
  let restOfName = customerName.slice(1)

  return firstLetter + restOfName;
}
