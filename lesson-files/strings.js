var line = "Bob,Smith,42,m"

var index = line.indexOf("Smith", line.indexOf(',', ',' + 1));
var indexEnd = index + 5;

var sub = line.substring(index, indexEnd);

var substr = line.substr(index, 5);

console.log(sub);
console.log(substr);

var startIndex = line.indexOf(",");

var endIndex = line.indexOf(",", startIndex + 1);

var subTwo = line.substring(startIndex + 1, endIndex);

var subThree = line.substr(startIndex + 1, (endIndex - 1) - startIndex);


console.log(subThree);
console.log(subTwo);

line = "Bob|Seger|80|m";
var line2 = "Stan|Lee|90|m";

var Arrayline = line.split('|');
var Arrayline2 = line2.split('|');

console.log(Arrayline[2]);
console.log(Arrayline2[2]);

var longString = "MedAssets is a company in Plano. They do medical stuff. The North Dallas .NET Users Group meets at MedAssets. I knew some programmers who had to deal with them changing their name to something else. I don not want to work at MedAssets because the train does not go anywhere near there. However, MedAssets has free soda, so that would be nice."

var newString = longString


while(newString.indexOf("MedAssets") > -1){
newString = newString.replace("MedAssets", "nThrive");
}

console.log(newString);
