var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


app.get("/home", function(req,res){
    res.sendFile(path.join(__dirname,"../public/home.html"));
});

app.post("/home", function(req,res){
    console.log("survey questions: " + req.body);
});