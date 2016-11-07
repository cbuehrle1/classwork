//function goes here
var city = ["Dallas", "Houston", "Austin", "El Paso", "San Antonio"]
var state = ["Texas", "New Mexico", "Louisiana", "Oklahoma"]

function whoBigger(a, b){
  if(a.length < b.length){
    return b;
  } else if(a.length > b.length){
    return a;
  } else if(a.length === b.length){
   return a || b;
  }
}

console.log(whoBigger(city, state))

/*
Write a function that takes two strings and returns the longest. If the two are of the same length, it can return either.
*/
