// # Step 5
// Functions are useful for all sorts of things, like organizing code.

function chapter1() { //This line "declares" the function.
  do {
    var answer = prompt('You are in a heavily wooded forest. A path stretches to the left and right. Which way do you want to go?');

  } while (answer != 'left' && answer != 'right');

  if (answer == 'left') {
    alert('go left');
  }
  else if (answer == 'right') {
    alert('go right');
  }
} // This is the end of the function

//A function does you no good unless you run it.
chapter1();
