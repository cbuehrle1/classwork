//write a function that takes two numbers and returns a sum

function theSum (a, b){
  return a + b;
}
console.log(theSum(5, 4))

//write a function that takes a password and returns if it is equal to 'p@55w0rd'

function passwordValidation (a) {
  if (a === "p@55w0rd"){
    return "true";
  } else {
    return "false";
  }
}
console.log(passwordValidation("p@55w0rd"))

//write a function that takes a string and returns whether or not it is longer than 10 characters long.

function stringLengthValidation (a){
  if (a.length > 10){
    return "more than 10 characters";
  } else {
    return "too short";
  }
}

console.log(stringLengthValidation("chad"))

//write a function that takes a string and returns whether or not it is longer than 10 characters long and contains an exclamation point.

function stringLengthEvalAndExlam (a){
  if (a.length > 10 && a.indexOf("!") > -1){
    return "true";
  } else {
    return "false";
  }
}

console.log(stringLengthEvalAndExlam("thechadisgreat!"))
//write a function that takes an array of strings and returns the number of things in the array

function arrLength (a){
  return a.length;
}

var b = ["a", "b", "c", "d"]

console.log(arrLength(b))

//write a function that takes an array of numbers and returns the sum

function sumOfArr (a) {
  var b = 0;
  for(var i = 0; i < a.length; i++){
  var b = b + a[i];
  }
  return b;
}

var c = [1, 4, 6, 7, 8, 100, 275, 698, 2, 1]

console.log(sumOfArr(c))

//write a function that takes an array and return `true` if the array contains more than 20 items.

function moreThanTwenty (a){
  if (a.length > 20){
    return "true";
  } else {
    return "false";
  }
}

var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

console.log(moreThanTwenty(b))

//write a function that takes an array of strings and returns all the strings that contain the letter 'e'

function returnI (a){
  var b = [];
  for(var i = 0; i < a.length; i++){
    if (a[i].indexOf("e") > -1){
      b.push(a[i]);
    } else{
      continue;
    }
  }
  return b;
}

var c = ["apple", "orange", "banana", "pear", "onion"]

console.log(returnI(c))

//write a function that takes an array of words and returns a new array with all the words uppercase

function makeUpperCase (a){
  var b = [];
  for(var i = 0; i < a.length; i++){
    var c = a[i].toUpperCase();
    b.push(c);
  }
  return b;
}

var d = ["chad", "richard", "buehrle"]

console.log(makeUpperCase(d))
//write a function that takes an array of strings and returns a count of the strings that do not contain vowels

function vowelOrNoVowel (a){
  var b = 0;
  for (var i = 0; i < a.length; i++){
    if (a[i].indexOf("a") > -1 || a[i].indexOf("e") > -1 || a[i].indexOf("i") > -1 || a[i].indexOf("o") > -1 || a[i].indexOf("u") > -1){
    var b = 1 + b;
    } else {
    continue
    }
  }
  return b;
}

var c = ["apple", "blg", "rfg", "nme"]

console.log(vowelOrNoVowel(c))

//write a function that takes an array of strings and returns a new string that contains only the words with vowels

function vowelOrNoVowel (a){
  var b = [];
  for (var i = 0; i < a.length; i++){
    if (a[i].indexOf("a") > -1 || a[i].indexOf("e") > -1 || a[i].indexOf("i") > -1 || a[i].indexOf("o") > -1 || a[i].indexOf("u") > -1){
      b.push(a[i]);
    } else {
    continue;
    }
  }
  return b;
}

var c = ["rob", "molly", "ptnr", "lmgb", "poop"]

console.log(vowelOrNoVowel(c))
//write a function that takes an array of booleans and returns the number of true values

function booleanReturn (a){
  var b = 0;
  for (var i = 0; i < a.length; i++){
    if (a[i] === true){
      var b = 1 + b;
    } else {
      continue;
    }
  }
  return b;
}

var c = [true, false, false, false, true, true, true, false];

console.log(booleanReturn(c));
