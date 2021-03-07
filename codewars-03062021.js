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

