var fs = require("fs");

fs.readFile("players_r_ruthba01_batting_standard.csv", "utf-8", function(err, data){
  var lines = data.split("\n");
  //console.log(lines);

  var columnNames = lines[0].split(",");

  console.log(columnNames[0]);

  var csv = {}

  csv[columnNames[0]] = [];
  console.log(csv)

 var years = csv.columnNames[0]

  console.log(years);

  for(var i = 1; i < lines.length; i++){
      var indivArray = lines[i].split(",");
      for(var i = 0; i < indivArray.length; i++){
        var columnCounter = 1;
        if(columnCounter < columnNames.length){
          var yearData = columnNames[0]: {
          columnNames[columnCounter]: indivArray[i],
            };
            years.push(yearData);
        }:
        columnCounter++;
      };
    }

    console.log(csv);

  });
