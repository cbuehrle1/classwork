// point #1
function aFunction(a, b, c) {
  // point #2
  c(b);
  // point #3
}

// point #4

aFunction(7, 14, function(d) {
  // point #5
  console.log(d); //What value is logged here?
});
// point #6
