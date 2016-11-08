//function goes here
var city = "Dallas";
var state = "Texas";
var country = "America";

function shortest(a, b, c){
  var d = a.split("")
  var e = b.split("")
  var f = c.split("")


  if( (d.length < e.length) && (d.length < f.length) ){
    return d.join("");
  } else if( (e.length < d.length) && (e.length < f.length) ){
    return e.join("");
  } else if( (f.length < d.length) && (f.length < e.length) ){
    return f.join("");
  } else if( (d.length === e.length) && (d.length < f.length) ){
    function random(d, e){
      var dString = d.join("");
      var eString = e.join("");

      var randomNumber = Math.floor(Math.random() * 2);
      console.log('random number', randomNumber);
      if (randomNumber === 0) {
        return dString;
      }
      else {
        return eString;
      }
    }
    return random(d, e);
  } else if( (d.length === f.length) && (d.length < e.length) ){
    function random(d, f){
      var dString = d.join("");
      var fString = f.join("");

      var randomNumber = Math.floor(Math.random() * 2);
      console.log('random number', randomNumber);
      if (randomNumber === 0) {
        return dString;
      }
      else {
        return fString;
      }
    }

  } else if( (e.length === f.length) && (e.length < d.length) ){
    function random(e, f){
      var eString = e.join("");
      var fString = f.join("");

      var randomNumber = Math.floor(Math.random() * 2);
      console.log('random number', randomNumber);
      if (randomNumber === 0) {
        return eString;
      }
      else {
        return fString;
      }
    }
  }
}

console.log(shortest(city, state, country))
/*
Write a function that takes three strings and returns the shortest. If two of the same length are passed in, it can return either.
*/

//
