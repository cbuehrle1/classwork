var express = require("express");
var bodyParser = require("body-parser")

var app = express();

app.use(express.static("public"));
app.use(bodyParser({ extended: false}));

var data = []

app.get("/api/data", function(req, res){
  console.log("get")
  res.send(data);
})
app.post("/api/data", function(req, res){
  console.log("post", req.body)
  data.push(req.body.word);
  res.send("hello");
})

app.listen(3001, function(){
  console.log("and we're live at 3001");
});
