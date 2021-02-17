// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function even_or_odd(number) {
//   if (number % 2 !== 0) {
//     return "Odd";
//   } else if (number % 2 === 0) {
//     return "Even";
//   }
// }

// Other solutions...

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}

// #Issue Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you recieve any more complaints. Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.

// #Task Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

// #Example:

// Input: 1,3,5,6,7,8

// Output: 1,2,3,4,5,6,7,8

const pipeFix = (numbers) =>
  Array.from(
    { length: numbers[numbers.length - 1] - numbers[0] + 1 },
    (_, i) => numbers[0] + i
  );

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons) {
  return bullets < dragons * 2 ? false : true;
}

// A wolf in sheep's clothing
// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// function warnTheSheep(queue) {
//   const predator = queue.indexOf("wolf");
//   const prey = queue.indexOf("sheep");
//   const detectThreat = queue.forEach(function animal() {
//     if (predator == 0) {
//       return "Pls go away and stop eating my sheep";
//     } else if (predator == prey + 1 || predator == prey - 1) {
//       return `Oi! Sheep number ${prey}! You are about to be eaten by a wolf!`;
//     }
//   });
// }

function warnTheSheep(queue) {
  const position = queue.reverse().indexOf("wolf");
  return position === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}

//   Grade book
// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// function getGrade(s1, s2, s3) {
//   let score = (s1 + s2 + s3) / 3;
//   if (score < 60) {
//     return "F";
//   } else if (score >= 60 && score < 70) {
//     return "D";
//   } else if (score >= 70 && score < 80) {
//     return "C";
//   } else if (score >= 80 && score < 90) {
//     return "B";
//   } else {
//     return "A";
//   }
// }

function getGrade(s1, s2, s3) {
  var avg = (s1 + s2 + s3) / 3;
  switch (true) {
    case avg >= 90:
      return "A";
    case avg >= 80:
      return "B";
    case avg >= 70:
      return "C";
    case avg >= 60:
      return "D";
    default:
      return "F";
  }
}

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// const quarterOf = (month) => {
//   if (month >= 10 && month <= 12) {
//     return 4;
//   } else if (month >= 7 && month <= 9) {
//     return 3;
//   } else if (month >= 4 && month <= 6) {
//     return 2;
//   } else if (month >= 1 && month <= 3) {
//     return 1;
//   }
// };

const quarterOf = (month) => Math.ceil(month / 3);

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//   const integers = arr.filter((integer) => integer > 0);
//   const reducer = (accumulator, currentValue) => accumulator + currentValue;
//   const sum = integers.reduce(reducer);
// }

const positiveSum = (array) =>
  array.reduce((a, b) => (Math.sign(b) === 1 ? a + b : a), 0);

//   Implement a function which multiplies two numbers.

function multiply(a, b) {
  return a * b;
}

//   The geese are any strings in the following array, which is pre-populated in your solution:

// geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

// ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter(birds) {
  const geese = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];
  birds = birds.filter((val) => !geese.includes(val));
  return birds;
  // return an array containing all of the strings in the input array except those that match strings in geese
}

// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
// the string should start with a 1.
// a string with size 6 should return :'101010'.
// with size 4 should return : '1010'.
// with size 12 should return : '101010101010'.
// The size will always be positive and will only use whole numbers.

// function stringy(size) {
//   let length = size.length;
//   for (let i = 0; i < length; i++) {
//     if (length % 2 === 0) {
//       size.push("0");
//     } else {
//       size.push("1");
//     }
//   }
// }

const stringy = (size) =>
  [...new Array(size)].map((element, i) => (i % 2 === 0 ? 1 : 0)).join("");

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// function fakeBin(x) {
//     let string = x.split('');
//   for (let i = 0; i < string.length; i++) {
//     let result = string > 5 ? "0" : "1";
//     return result;
//   }
// }

const fakeBin = (x) =>
  x
    .split("")
    .map((num) => (Number(num) >= 5 ? 1 : 0))
    .join("");

// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!

function fixTheMeerkat(arr) {
  const reverse = arr.reverse();
  return reverse;
}

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

// function bonusTime(salary, bonus) {
//   if (!bonus) {
//     return "\u00A3" + salary;
//   } else {
//     return "\u00A3" + salary * 10;
//   }
// }

const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;

// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	            Output
// "Jabroni"	        "Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	        "Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	        "Your tax dollars"
// "Rapper"	            "Cristal"
// anything else	    "Beer"

// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".
// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

// const table = {
//   jabroni: "Patron Tequila",
//   "school counselor": "Anything with Alcohol",
//   programmer: "Hipster Craft Beer",
//   "bike gang member": "Moonshine",
//   politician: "Your tax dollars",
//   rapper: "Cristal",
// };

// const getDrinkByProfession = (parameter) =>
//   table[parameter.toLowerCase()] || "Beer";

function getDrinkByProfession(param) {
  param = param.toLowerCase();

  switch (param) {
    case "jabroni":
      return "Patron Tequila";
    case "school counselor":
      return "Anything with Alcohol";
    case "programmer":
      return "Hipster Craft Beer";
    case "bike gang member":
      return "Moonshine";
    case "politician":
      return "Your tax dollars";
    case "rapper":
      return "Cristal";
    default:
      return "Beer";
  }
}

//   In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// function makeNegative(num) {
//   return -Math.abs(num);
// }

function makeNegative(num) {
  return num < 0 ? num : -num;
}

// This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.

const solve = (x, y) => x / y;

// The code provided is supposed replace all the dots . in the specified String str with dashes -
// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

var replaceDots = function (str) {
  return str.replace(/\./g, "-");
};

//   In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

//   For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

//   Your function will be tested with pre-made examples as well as random ones.

//   If you can, try writing it in one line of code.

function findDifference(a, b) {
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  const volumeDifference = Math.abs(a.reduce(reducer) - b.reduce(reducer));
  return volumeDifference;
}

// Write a function which takes a number and returns the corresponding ASCII char for that value.
// Example:
// get_char(65) # => 'A'
// For ASCII table, you can refer to http://www.asciitable.com/

function getChar(c) {
  return String.fromCharCode(c);
}

// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let bmi = weight / Math.pow(height, 2);
  console.log(bmi);
  if (bmi <= 18.5) {
    return "Underweight";
  }
  if (bmi <= 25.0) {
    return "Normal";
  }
  if (bmi <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return n * m;
  }
}

// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let stringSum = x.filter((string) => typeof string !== "number");
  stringSum = stringSum.reduce(reducer);
  let numSum = x.filter((num) => num !== stringSum);
  numSum = numSum.reduce(reducer);
  let result = numSum + stringSum;
  return result;
}

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons) {
  let bulletsPerDragon = 2;
  if (bullets < dragons * bulletsPerDragon) {
    return false;
  } else {
    return true;
  }
}

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  return x.reduce(reducer);
}

//   Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]
// For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

function maps(x) {
  return x.map((e) => e * 2);
}

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  let rentPerDay = 40;
  if (d < 3) {
    return rentPerDay * d;
  } else if (d >= 3 && d < 7) {
    return rentPerDay * d - 20;
  } else if (d >= 7) {
    return rentPerDay * d - 50;
  }
}

// const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));

// Introduction
// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.

// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)
// Hope you enjoy it .. Awaiting for Best Practice Codes

// Enjoy Learning !!!

function century(year) {
  let century = Math.ceil(year / 100);
  return century;
}

// This is the first step to understanding FizzBuzz.
// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
// Your expected output is an array of positive integers from 1 to n (inclusive).
// Your job is to write an algorithm that gets you from the input to the output.

function preFizz(n) {
  let array = [];
  for (let i = 1; i <= n.length; i++) {
    array.push(i);
  }
  return array;
}

// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
// For example:
// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.
// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.
// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.
// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.
// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.
// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.
// Note:
// If you are given an array with multiple answers, return the lowest correct index.

// function findEvenIndex(arr) {
//   const reducer = (accumulator, currentValue) => accumulator + currentValue;
//   let compareArr = arr.forEeach((e) => {
//     // add all the elements in the array from left to right
//     let leftToRight = e.reduce(reducer);
//     // reverse the order of the elements in the array from right to left
//     let rightToLeft = e.reverse().reduce(reducer);
//     return rightToLeft;
//   });
// }

// const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0)
// const findEvenIndex = array =>
//   array.findIndex((_, i) => sum(array, 0, i) === sum(array, i + 1))

function findEvenIndex(arr) {
  var left = 0,
    right = arr.reduce(function (pv, cv) {
      return pv + cv;
    }, 0);
  for (var i = 0; i < arr.length; i++) {
    if (i > 0) left += arr[i - 1];
    right -= arr[i];

    if (left == right) return i;
  }

  return -1;
}

//   Personalized greeting
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	                return
// name equals owner	'Hello boss'
// otherwise	        'Hello guest'

function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"

function solution(string) {
  string = string.replace(/([A-Z]+)/g, " $1");
  return string;
}

// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:
// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// function switcheroo(x) {
//   for (let i = 0; i < x; i++) {
//     if (x[i] === "c") {
//       let c = x[i] === "c";
//       return x.reverse(x[i], c);
//     } else {
//       return x.reverse();
//     }
//   }
// }

const switcheroo = (x) =>
  x.replace(/[ab]/g, (match) => (match === "a" ? "b" : "a"));

function switcheroo(x) {
  return x
    .split("")
    .map(function (e) {
      if (e == "b") return "a";
      if (e == "a") return "b";
      if (e == "c") return "c";
    })
    .join("");
}

const switcheroo = (x) =>
  x
    .split("")
    .map((letter) => (letter === "a" ? "b" : letter === "b" ? "a" : "c"))
    .join("");
