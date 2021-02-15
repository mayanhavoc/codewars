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

function bonusTime(salary, bonus) {
  if (!bonus) {
    return "\u00A3" + salary;
  } else {
    return "\u00A3" + salary * 10;
  }
}
