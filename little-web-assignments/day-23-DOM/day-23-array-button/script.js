(function (){
 var counter = 0
 var decrementButton = document.querySelector('.decrement');
 var incrementButton = document.querySelector('.increment');
 var display = document.querySelector('.display');
 var i = ['Bucephalus','Pegasus','Romulus','Patton','Gladiator','Black Beauty', 'JackAss'];

 display.textContent = i[counter];

 decrementButton.addEventListener('click', function() {
   if( counter === 0) {
      counter = i.length - 1;
      } else {
       counter--;
      };
    display.textContent = i[counter];
 });

 incrementButton.addEventListener('click', function() {
   if(counter === i.length - 1) {
     counter = 0;
   } else {
     counter++;
   };
    display.textContent = i[counter];
 });
})();
