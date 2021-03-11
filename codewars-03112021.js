// # Check the exam
//The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
// If the score < 0, return 0.

// For example:
// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

// function checkExam(array1, array2) {
//     // good luck
//     let result = 0;
//     if (array1 === array2){
//         return result += 4;
//     } else if (array1 != array2){
//         return result -= 1;
//     } else if (result < 0){
//         return 0;
//     }
//     return result;
//    }

const checkExam = (answers, responses) => {
    const score = responses.reduce((total, response, index) => {
        if(!response) return total;
        if (response === answers[index]) return total +4;
        if (response !== answers[index]) return total -1;

        return total;
    }, 0);
    
    return score < 0 ? score : 0;
};

// ---

// # Switch it Up!
// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".
// If your language supports it, try using a switch statement.


function switchItUp(number){
    switch (number) {
      case 0: 
        return "Zero"
        break;
      case 1:
          return "One"
          break;
      case 2: 
          return 'Two'
          break;
      case 3: 
          return 'Three'
          break;
      case 4: 
          return 'Four'
          break;
      case 5: 
          return 'Five'
          break;
      case 6: 
          return 'Six'
          break;
      case 7: 
          return 'Seven'
          break;
      case 8: 
          return 'Eight'
          break;
      case 9: 
          return 'Nine'
          break;
      default:
          break;
    }
  }

// ---

// # Keep Hydrated!
// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

const litres = time => {
    const drink = Math.floor(time * 0.5);
    return drink;
}

// # Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together. 
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// function squareSum(numbers){
//     const num = numbers.reduce(number => {
//          number**number;
//     }, 0);
//     return num;
// }

function squareSum(numbers) {
    return numbers.reduce(function(sum, n) {
      return n * n + sum;
    }, 0);
  }

// # L1: Set Alarm
// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true


// function setAlarm(employed, vacation){
//     if (!employed){
//         return false;
//     } else if (employed && !vacation){
//         return true;
//     } else {
//       return false;
//     } 
// }

const setAlarm = (employed, vacation) => employed && !vacation;

