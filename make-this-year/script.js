var purpleDiv = document.querySelector(".purple-header");
var stringItems = ["an Apple Watch app", "a video course", "a podcast", "a blog", "a personal website", "an iPhone app", "an email course", "an Ebook", "an e-commerce site", "a newsletter"]
var count = 0;
var bigCounter = 0;
var speed = 40;
var intervalID;

intervalID = setInterval(goForward, speed);

function goForward (){

  if (count === stringItems[bigCounter].length){

    clearInterval(intervalID);
    setTimeout(stopWaiting, 1000);

  } else {

    count++;
    purpleDiv.textContent = stringItems[bigCounter].slice(0, count);

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
    purpleDiv.textContent = stringItems[bigCounter].slice(0, count);

  }

}

function stopWaiting(){

    intervalID = setInterval(goBackward, speed);

}
