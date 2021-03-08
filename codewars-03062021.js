// Convert a Number to a String!
// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
//numberToString(123); // returns '123';`   
//numberToString(999); // returns '999';`

function numberToString(num) {
    return `${num}`
  }

  // ----

  // You Can't Code Under Pressure #1

  // Code as fast as you can! You need to double the integer and return it.

  function doubleInteger(i) {
    i = i * 2;
    return i
  }

  // ----

  // Beginner Series #4 Cockroach
  // The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:
// cockroachSpeed(1.08) == 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
    let cs = Math.floor(s / 0.036);
    return cs;
  }

  // ----

  // #Opposites Attract
  // Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
  // Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

  function lovefunc(flower1, flower2){
    // moment of truth
    if (flower1 % 2 === 0 && flower2 % 2 !== 0 || flower1 % 2 !== 0 && flower2 % 2 === 0){
        return true;
    } else {
        return false;
    }
  }

  // ----

  // # Miles per gallon to kilometers per liter
  // Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.
// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).
// Make sure to round off the result to two decimal points. If the answer ends with a 0, it should be rounded off without the 0. So instead of 5.50, we should get 5.5.
// Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres

function converter(mpg){
    kml = Math.round((mpg / 2.8248105315) * 100)/ 100;
    return kml;
}

// function converter (mpg) {
//     return +(mpg * .354006043538).toFixed(2)
//   }

// # Reversed Words
// Complete the solution so that it reverses all of the words within the string passed in.
// Example:
// reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"

function reverseWords(str){
    str = str.replace( /^\s+|\s+$/g, " " );
    str = str.replace( /\s+/g, " " );
    let words = str.split(" ");
    words = words.reverse();
    str = words.join(" ");
    return str; // reverse those words
  }

//   function reverseWords(str){
//     return str.split(' ').reverse().join(' ');
//   }

// ----

// # Grasshopper - Terminal game move function
// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

//Example:
// move(3, 6) should equal 15

function move (position, roll) {
    // return the new position
    position = position + roll * 2;
    return position;
  }

  // ----

  // # Function 1 - hello world
  // Description:
// Make a simple function called greet that returns the most-famous "hello world!".
// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?

function greet(you) {
    you = {
        'hello': 'Hello',
        'world': 'world',
        conjoined(){
            return you['hello'] + you['world']
        }
    }
    return you;
}

// ---

// UEFA EURO 2016
// Finish the uefaEuro2016() function so it return string just like in the examples below:
// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

function uefaEuro2016(teams, scores){
    let team1 = teams[0];
    let team2 = teams[1]
    if (scores[0] > scores[1]){
          return `At match ${team1} - ${team2}, ${teams[0]} won!`;
      } else if (scores[0] < scores[1]){
          return `At match ${team1} - ${team2}, ${teams[1]} won!`;
      } else if (scores === scores) {
          return `At match ${team1} - ${team2}, teams played draw.`;
      }
      return 
    }
// ---

// #Find Maximum and Minimum Values of a List
// Your task is to make two functions, max and min (maximum and minimum in PHP and Python) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.
// #Examples
// max([4,6,2,1,9,63,-134,566]) returns 566
// min([-52, 56, 30, 29, -54, 0, -110]) returns -110
// max([5]) returns 5
// min([42, 54, 65, 87, 0]) returns 0
// #Notes
// You may consider that there will not be any empty arrays/vectors.

const min = function(list){
    list = list.sort((a,b) => (a - b));
    return list[0];
}

const max = function(list){
    list = list.sort((a,b) => b - a);
    return list[0];
}

// ---


// #The Feast of Many Beasts
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
    const subB = beast[0] + beast[(beast.length-1)]
     const subD = dish[0] + dish[(dish.length-1)]
     const isEqual = JSON.stringify(subB) === JSON.stringify(subD);
   return isEqual;
     }

    //  function feast(beast, dish) {
    //     return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
    //   }

// ---

// #MakeUpperCase
// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
    str = str.toUpperCase();
    return str;
  }

// ---

