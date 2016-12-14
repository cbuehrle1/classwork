var minute = document.querySelector(".minute")
var seconds = document.querySelector(".seconds")
var buttons = document.querySelector(".buttons")
var boom = document.querySelector("p")
var tooFast = document.querySelector("h3")

var minuteVal = 2;
var secondsVal = 0;
var timer;
var speed = 1000;

buttons.addEventListener("click", function(evt){

  if (evt.target.className === "start-button")  {

    boom.classList.remove("show");
    tooFast.classList.remove("show")
    clearInterval(timer);

    if (speed === 200){
      speed = 1000;
    }

    timer = setInterval(function(){

      if (secondsVal >= 1){

        secondsVal--;

      } else if (secondsVal == 0 && minuteVal !== 0){

        minuteVal--;
        secondsVal = 59;

      } else if (secondsVal == 0 && minuteVal == 0){

        clearInterval(timer);
        boom.classList.add("show");

      }

      if(secondsVal < 10){

        seconds.textContent =  "0" + secondsVal.toString()
        minute.textContent = minuteVal

      } else {

        seconds.textContent = secondsVal
        minute.textContent = minuteVal

      }

    }, speed);

  }

  else if (evt.target.className === "stop-button") {

    boom.classList.remove("show");
    tooFast.classList.remove("show")
    clearInterval(timer);

  }

  else if (evt.target.className === "reset-button") {

    minuteVal = 2;
    secondsVal = 0;

  }

  else if (evt. target.className === "faster-button") {


    if (speed > 200){
      speed = speed - 200;
      console.log(speed)
    }  else {
      speed = speed
      tooFast.classList.add("show")
    }

    clearInterval(timer);

    timer = setInterval(function(){

      if (secondsVal >= 1){

        secondsVal--;

      } else if (secondsVal == 0 && minuteVal !== 0){

        minuteVal--;
        secondsVal = 59;

      } else if (secondsVal == 0 && minuteVal == 0){

        clearInterval(timer);
        boom.classList.add("show");

      }

      if(secondsVal < 10){
        console.log("0" + secondsVal.toString())
        seconds.textContent = "0" + secondsVal.toString()
        minute.textContent = minuteVal

      } else{
        seconds.textContent = secondsVal
        minute.textContent = minuteVal

      }

    }, speed);

  }


});
