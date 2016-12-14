// # Step 7
// Now we can create another chapter, and another, and another, just by creating more functions and chaining them.

function chapter1() {
  do {
    var answer = prompt('You are in a heavily wooded forest. A path stretches to the left and right. Which way do you want to go?');

  } while (answer != 'left' && answer != 'right');

  if (answer == 'left') {
    leftInForest(); // Jumps to the `leftInForest` function
  }
  else if (answer == 'right') {
    rightInForest(); // Jumps to the `rightInForest` function
  }
}

function leftInForest() {
  alert('You come upon a bear. The bear is hungry so it eats you. R.I.P.')
}

function rightInForest() {
  var msg = 'You follow the path and leave the forest. The past opens to the side of a mountain. Going up the mountain to get a look around seems like a good idea but there is a lake down the slope, and you are a bit thirsty. Go up or down?';

  do {
    var answer = prompt(msg);
  } while (answer != 'up' && answer != 'down');

  if (answer == 'up') {
    upTheMountain();
  }
  else {
    downTheMountainTowardsTheLake();
  }
}

function upTheMountain() {
  alert('You climbed a while then sprained your ankle. On the way back down, your arm got caught in a boulder. Then a bear came along and started to eat you, but it fell off a cliff. In relief, you called "Yay!", which was a bad idea. There was a dragon nearby whom you woke up. In anger, he burned you with fire. R.I.P.');
}

function downTheMountainTowardsTheLake() {
  alert('You stumble upon a large pile of diamonds and a valet to drive you home. The End.');
}





chapter1();
