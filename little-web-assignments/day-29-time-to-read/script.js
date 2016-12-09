var div  = document.querySelectorAll("p");
var input = document.querySelector(".input")

console.log(div);

var sum = 0;

for (var i = 0; i < div.length; i++){

  var arr = div[i].textContent.split(" ");

  sum = sum + arr.length;

}

var result = Math.floor(sum / 230)

input.textContent = " " + result + " ";

console.log(result)
