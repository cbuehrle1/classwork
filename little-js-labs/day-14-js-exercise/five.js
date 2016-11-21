//Which console log runs first?

// point #1
//console.log("1");
function aFunction(a) {
  // point #2
  //console.log("2");
  a();
  // point #3
  //console.log("3");
  console.log('that one');
}
// point #5
//console.log("5");

aFunction(function() {
  // point #4
  //console.log("4");
  console.log('this one');
});
// point #6
//console.log("6");
