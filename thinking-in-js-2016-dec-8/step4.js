// # Step 4
// Need to keep doing something until you get what you want? `do while` or `while` are good.

do { //do everthing in here...
  var answer = prompt('You are in a heavily wooded forest. A path stretches to the left and right. Which way do you want to go?');

} while (answer != 'left' && answer != 'right'); // ...until this is true

if (answer == 'left') {
  alert('go left');
}
else if (answer == 'right') {
  alert('go right');
}
