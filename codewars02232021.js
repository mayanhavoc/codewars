// # Deodorant evaporator 7kyu

// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.

// Example:
// evaporator(10, 10, 5) -> 29

function evaporator(content, evap_per_day, threshold) {
  let result = 0;
  let percentage = 100;
  while (percentage > threshold) {
    percentage = percentage - percentage * (evap_per_day / 100);
    result += 1;
  }
  return result;
}

// # Format a string of names like 'Bart, Lisa & Maggie'

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

// function list(names) {
//     let strings = [];
//     names.forEach((e) => {
//       e = e["name"];
//       strings.push(e);
//     });
//     strings.toString('');
//     strings = strings.split('');
//     console.log(strings);
//      }

function list(names) {
  if (!names) return "";
  if (names.length === 2) return `${names[0].name} & ${names[1].name}`;

  return names
    .map(({ name }) => name)
    .join(", ")
    .replace(/,(?!.*,)/g, " &");
}

// # Multiplication table
// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:
// 1 2 3
// 2 4 6
// 3 6 9

// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function (size) {
  let arr = [];
  for (let i = 1; i <= size; i++) {
    let tempArr = [];
    for (let j = 1; j <= size; j++) {
      tempArr.push(i * j);
    }
    arr.push(tempArr);
  }
  return arr;
};

// #Grasshopper - Summation

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// let summation = function (num) {
//   let result = [];
//   result = result.push(result.fill(1, array.length));
//   console.log(result);
// };

var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }

  return result;
};

// # Total pressure calculation

// Given the molecular mass of two molecules M1 and M2, their masses present m1 and m2 in a vessel of volume V at a specific temperatura T.
// Find the total pressure Ptotal exerted by the molecules.
// The formula to calculate the pressure is:

// Ptotal = [(m1/M1)+(m2/M2)RT]/V

// Input
// Six values: m1, m2, M1, M2, V, T
// Units are:
// For m1 and m2: grams(g)
// For M1 Ms: g*mol-1
// For V: dm3
// For T: C

//Output
// One value: Ptotal, in units of atm

// Notes
// Remember: Temperature is given in Celsius while SI unit is Kelvin(K)
// 0°C = 237.15K
// The gas constant R = 0.082dm3 * atm * K-1* mol-1

function solution(M1, M2, m1, m2, V, T) {
  M1 = (m1 * 0.001) / M1;
  M2 = (m2 * 0.001) / M2;
  T = T + 273.15;
  var R = 0.082;

  return (((M1 + M2) * R * T) / V) * 1000;
}
