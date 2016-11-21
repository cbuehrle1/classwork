var csv = 'name,age\nJoan,22\nBob,42\nFred,78'

//console.log("1");
//point #1
function bFunction(c) {
  //point #2
  //console.log("2");
  var z = c.split('\n');
  return z;
}

function aFunction(a, b) {
  //point #3
//  console.log("3");
  var f = b(a);
  //point #4
//  console.log("4");
  for (var i = 1; i < f.length; i++) {
    var d = f[i].split(',');
  //  console.log(d[0], ' is ', d[1], ' years old');
  }
//  console.log("5");
  //point #5
}
//console.log("6");
//point #6
aFunction(csv, bFunction);
//point #7
//console.log("7");
