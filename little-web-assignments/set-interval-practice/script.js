var div = document.querySelector("div");
var intervalID;
var stringItems = ["Steven is a poopyhead", "hello jill", "hi hattie", "sup cherd"]
var count = 0;
var bigCounter = 0;
var direction = "forward";
var speed = 40;


intervalID = setInterval(goForward, speed);

function goForward (){

  if (count === stringItems[bigCounter].length){

    clearInterval(intervalID);
    setTimeout(stopWaiting, 1000);

  } else {
  
    count++;
    div.textContent = stringItems[bigCounter].slice(0, count);

  }

}

function goBackward(){

  if (count === 0 && bigCounter === stringItems.length - 1){

    clearInterval(intervalID);
    bigCounter = 0;
    intervalID = setInterval(goForward, speed)

  } else if (count === 0){

    clearInterval(intervalID);
    bigCounter++;
    intervalID = setInterval(goForward, speed);

  }
    else {

    count--;
    div.textContent = stringItems[bigCounter].slice(0, count);

  }

}

function stopWaiting(){

    intervalID = setInterval(goBackward, speed);

}
