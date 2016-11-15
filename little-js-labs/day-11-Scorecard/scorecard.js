var fs = require("fs");

var fileImport = fs.readFileSync("Most+Recent+Cohorts+(Scorecard+Elements).csv", "utf-8");

var lines = fileImport.split("\n");

for(var i = 1; i < lines.length - 1; i++){
  var indivArray = lines[i].split(",");
  if(indivArray[32] === "NULL"){
  } else {
    console.log(indivArray[3] + ", " + indivArray[32]);
  }
}
