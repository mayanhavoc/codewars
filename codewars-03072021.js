// # NBA full 48 minutes average
// An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.
// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.
// Examples:
// pointsPer48(12, 20) // 28.8
// pointsPer48(10, 10) // 48 
// pointsPer48(5, 17) // 14.1 
// pointsPer48(0, 0) // 0
// Notes:
// All inputs will be either be an integer or float.
// Follow your dreams!

function pointsPer48(ppg, mpg) {
    let score = ppg/mpg;
    let rounded = Math.round(score * 48 * 10)/10 || 0;
    return rounded;
 }

 // # Find the position!
 // When provided with a letter, return its position in the alphabet.
// Input :: "a"
// Ouput :: "Position of alphabet: 1"

// function position(letter){
//     //Write your own Code!
//     const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//     const position = alphabet.filter((l, i) => l[i] === alphabet[i] );
//     return position;
//     }

function position(letter){
    return `Position of alphabet: ${letter.charCodeAt()-96}`
  }

  // #Drink about
  // Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:
// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples:
// peopleWithAgeDrink(13) === "drink toddy"
// peopleWithAgeDrink(17) === "drink coke"
// peopleWithAgeDrink(18) === "drink beer"
// peopleWithAgeDrink(20) === "drink beer"
// peopleWithAgeDrink(30) === "drink whisky"

function peopleWithAgeDrink(old) {
    if(old < 14 ){
        return "drink toddy"
    } else if (old >= 14 && old < 18){
        return "drink coke"
    } else if (old >= 18 && old < 21){
        return "drink beer"
    } else if (old >= 21){
        return "drink whisky"
    } 
    return '';
  };

// ---

// # How much water do I need?
// My washing machine uses water amount of water to wash clothes amount of clothes. You are given a load(in JavaScript and Python) or max_load (in Ruby) amount of clothes to wash. For each single item of load above the standard amount of clothes, the washing machine will use 10% more water (multiplicative) to clean.

// For example, if the amount of clothes is 10, the amount of water it requires is 5 and the load is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.

// Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to work out how much water is needed if you have a clothes amount of clothes. The function will accept 3 parameters - howMuchWater(water, load, clothes) / how_much_water(water, load, clothes) / how_much_water(water, max_load, clothes)

// My washing machine is an old model that can only handle double the amount of load (or max_load). If the amount of clothes is more than 2 times the standard amount of load (max_load), return 'Too much clothes'. The washing machine also cannot handle any amount of clothes less than load (max_load). If that is the case, return 'Not enough clothes'.

// The answer should be rounded to the nearest 2 decimal places.

// function howMuchWater(water, load, clothes){
//     // Insert your brilliant code here
//     return Math.pow((water * 1.1), (load - clothes));
//   }

function howMuchWater(W,L,C){
    if (C>2*L) return 'Too much clothes'
    if (C<L) return 'Not enough clothes'
   return  +((W * 1.1 ** (C - L)).toFixed(2))
   }