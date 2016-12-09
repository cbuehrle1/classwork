var purpleDiv = document.querySelector(".purple-header");

var textThatScrolls = ["an Apple Watch app", "a video course", "a podcast", "a blog", "a personal website", "an iPhone app", "an email course", "an Ebook", "an e-commerce site", "a newsletter"]

var counter = 0;

var i = 0;

var direction = "forward";


setInterval(function(){

  if (direction === "forward" && counter < textThatScrolls[i].length){
    purpleDiv.textContent = textThatScrolls[i].slice(0, counter)
    counter++;
  } else if (direction === "forward" && counter === textThatScrolls[i].length){
    setTimeout(function(){
      direction = "backword"
      purpleDiv.textContent = textThatScrolls[i].slice(0, counter);
      counter = counter - 1;
    }, 200)
  } else if (direction === "backword" && counter < textThatScrolls[i].length && counter >= 1){
    counter = counter - 1;
    purpleDiv.textContent = textThatScrolls[i].slice(0, counter);
  } else if (direction === "backword" && counter === 0){
    purpleDiv.textContent = textThatScrolls[i].slice(0, counter);
    direction = "forward";


    if (i === textThatScrolls.length - 1){
      i = 0;
    } else {
      i = i + 1;
    }


  }


}, 200)
