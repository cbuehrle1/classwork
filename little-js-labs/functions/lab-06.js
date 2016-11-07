//function goes here
var city = ["Dallas", "Houston", "Austin", "El Paso", "San Antonio", "Midland"]
var state = ["Texas", "New Mexico", "Louisiana", "Oklahoma", "Arkansas"]
var country = ["USA", "Canada", "Mexico", "Belize"]

function shortest(a, b, c){
  if(a.length < b.length && a.length < c.length){
    return a;
  } else if(b.length < a.length && b.length < c.length){
    return b;
  } else if(c.length < a.length && c.length < b.length){
    return c;
  } else if(a.length === b.length){
    return a || b;
  } else if(b.length === c.length){
    return b || c;
  }
}

console.log(shortest(city, state, country))
/*
Write a function that takes three strings and returns the shortest. If two of the same length are passed in, it can return either.
*/
