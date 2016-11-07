var nums = [1, 6, 42, 3, 17];
var bigNums = [];

for(var i = 0; i < nums.length; i++){
  if(nums[i] > 10){
    bigNums.push(nums[i])
  };
}
//loop goes here

console.log(bigNums);

/*
Write a while loop to loop over the array of numbers and collect all the numbers over 10 into another array.
Expected output:
[ 42, 17 ]
*/
