// point #1
console.log("1")
function aFunction(a, b) {
  // point #2
  console.log("2")
  b(a);
  console.log("3")
  // point #3
}

// point #4
console.log("4")
aFunction(98, function(c) {
  // point #5
  console.log("5")
  //What value is logged here?
  console.log(c);
});
  console.log("6")
// point #6
