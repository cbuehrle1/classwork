var express = require("express");

var app = express();

app.use(express.static("public"))

app.get("/api/things", function(req, res){
  res.send("howdy");
});

app.get("/path/tooathing", function(req, res){
  res.send("bai");
});

app.get("/api/class", function(req, res){
  var theClass ={
    name: "Front-End Engineering",
    cohort: "October 2016",
    students: ["Miguel", "Chad", "Kyle", "Chelsey", "David", "Taylor"]
  }
  res.send(theClass);
});

app.listen(5001, function(){
  console.log("LIVE FROM 5001")
})
