// # Step 3
// Need to check something like an answer? An `if`, `if else`, and `else` are useful for that..

var answer = prompt('You are in a heavily wooded forest. A path stretches to the left and right. Which way do you want to go?');

if (answer == 'left') { // First it checks this
  alert('go left');
}
else if (answer == 'right') { // If that didn't match, it checks this
  alert('go right');
}
else { // If nothing matches, the `else` will match
  alert('they answered something unexpected: ' + answer);
}
