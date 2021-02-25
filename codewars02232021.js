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
  let R = 0.082;

  return (((M1 + M2) * R * T) / V) * 1000;
}

// # Convert boolean values to strings 'Yes' or 'No'.
// COmplete the method that takes a boolean value and return a "yes" string for true or a "no" string for false.

function boolToWord(bool) {
  if (bool !== true) {
    return "No";
  } else {
    return "Yes";
  }
}

// # Chuck Norris I - Push Ups
// Chuck Norris loves push ups. That's just a fact. It has been said that when Chuck Norris does a push up, he isn't pushing himself up, he's pushing the world down!
// Today, Chuck got home from work 10 minutes earlier than his wife. Naturally he decided to bang out some push ups. By the time she arrives home he can have smashed out at least 1000 and barely broken a sweat. He counts them in binary, because he thinks coding is cool, and because he is a massive Badass.
// When his wife arrives home, she starts talking to Chuck, spoiling his count! Your job is to write a function to isolate Chuck's count, and then work out how many push ups he has done! Return your answer as a number.
// Careful Chuck doesn't lose count! Even if he does, always return the highest number he counted to! If Chuck's wife has left a list of jobs for him he won't be able to do any push ups... if there is no sign of a count, simply return "CHUCK SMASH!!"
// In the event someone dares to provide Chuck with something other than a string, return 'FAIL!!'
// Your code should still pass in the case that the binary is mixed up with other characters - maybe Chuck has a cough... e.g.: '1ee1gf00t10h1011tr00' --> '110010101100' --> 3244.
// Feel the burn!!

function chuckPushUps(string) {
  if (typeof string !== "string" || string.length === 0) return "FAIL!!";
  if (/[01]/.test(string))
    return Math.max(
      ...string.split` `
        .map((v) => v.replace(/[^01]/g, ""))
        .map((v) => parseInt(v, 2))
        .filter((v) => !isNaN(v))
    );
  return "CHUCK SMASH!!";
}

// # Reversed strings
// COmplete the solution so that it reverses the string passed into it

function solution(str) {
  str = str.split("");
  str = str.reverse();
  str = str.join("");
  return str;
}

// # Are arrow functions odd?
// Return the odds from a list

function odds(values) {
  return values.filter((num) => num % 2 !== 0);
}

// # Parse nice int from char problem
// Ask a small girl - "How old are you?" She always says strange things... Let's help her!
// For correct answer program should return int from 0 to 9.
// Assume test input string always valid and may look like '1 year old' or '5 years old', etc... The first char is number only.

// function getAge(inputString) {
//   inputString = inputString.split("");
//   let age = inputString.find((n) => n === Number);
//   console.log(age);
// }

function getAge(inputString) {
  return parseInt(inputString);
}
