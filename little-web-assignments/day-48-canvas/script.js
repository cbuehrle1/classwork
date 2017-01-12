var canvas1 = document.querySelector("#canvas-one");
var context = canvas1.getContext("2d");

context.fillStyle = "#F00";

  // context.fillRect(20, 20, 100, 100);
  // context.strokeRect(20, 20, 100, 100);

  context.strokeRect(0, 0, 200, 200);
  context.fillRect(20, 100, 50, 100);
  context.fillStyle = "#0F0";
  context.fillRect(120, 50, 50, 150);

  context.lineWidth = 4;

  context.beginPath();
  context.moveTo(210, 210);
  context.lineTo(280, 280);
  context.lineTo(180, 400);
  context.closePath();

  context.fill();
  context.stroke();

  context.fillStyle = "#F6B";
  context.beginPath();
  context.arc(50, 300, 30, .5 * Math.PI, 1 * Math.PI, false);
  context.lineTo(50, 300);
  context.stroke();
  context.fill();


  context.fillStyle = "#F00"
  context.beginPath();
  context.lineTo(50, 300);
  context.arc(50, 300, 30, .5 * Math.PI, 1 * Math.PI, true);
  context.closePath();
  context.stroke();
  context.fill();

var canvas2 = document.querySelector("#canvas-two");
context = canvas2.getContext("2d");

var inc = 0
var direct = "right"

setInterval(function() {
  if (inc > 400) {
    direct = "left"
  } else if (inc <= 0){
    direct = "right"
  }
  if (direct === "left")
  {
    inc -= 1;
    context.clearRect(0, 0, 400, 400);
    context.beginPath();
    context.arc(inc, 100, 25, 0, 2 * Math.PI);
    context.fill()
  }
  else if (direct === "right"){
    inc += 1;
    context.clearRect(0, 0, 400, 400);
    context.beginPath();
    context.arc(inc, 100, 25, 0, 2 * Math.PI);
    context.fill()
  }
}, 5)
