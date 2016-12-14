// # Step 6
// You can jump from function to function, like you jump to different sections of a choose your own adventure book.

function chapter1() {
  do {
    var answer = prompt('You are in a heavily wooded forest. A path stretches to the left and right. Which way do you want to go?');

  } while (answer != 'left' && answer != 'right');

  if (answer == 'left') {
    leftInForest(); // Jump to the `leftInForest` function
  }
  else if (answer == 'right') {
    rightInForest(); // Jump to the `rightInForest` function
  }
}

function leftInForest() {
  alert('You come upon a bear. The bear is hungry so it eats you. R.I.P.')
}

function rightInForest() {
  alert('You found a large pile of money and a teleportation device to send you home. Yay, you win!')
}





chapter1();
