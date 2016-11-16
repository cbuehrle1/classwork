var fs = require("fs");

var fileImport = fs.readFileSync("Most+Recent+Cohorts+(Scorecard+Elements).csv", "utf-8");

var lines = fileImport.split("\n");

var column1 = []
var column2 = []

for(var i = 1; i < lines.length - 1; i++){
  var indivArray = lines[i].split(",");
  if(indivArray[32] === "NULL"){
  } else{
    column1.push(indivArray[3]);
    column2.push(indivArray[32]);
  };
}

var bestScore = function indexOfMax(arr) {
    if (column2.length === 0) {
        return -1;
    }

    var max = column2[0];
    var maxIndex = 0;

    for (var i = 0; i < column2.length; i++) {
        if (column2[i] > max) {
            maxIndex = i;
            max = column2[i];
            console.log("newvalue", max, maxIndex);
        }
    }

    return maxIndex;
}

var indexRow = bestScore(column2)

var bestSchool = column1[indexRow]
console.log(bestSchool);


console.log(bestSchool + " " + column2[indexRow]);
