var express = require("express")

var app = express();

var path = require("path");

app.use(express.static(path.join(__dirname, "./node_modules")));
app.use(express.static(path.join(__dirname, "./client")));



port = 8000;

app.listen(port, function(){
	console.log("LISTENING TO PORT ", port, "PORTFOLIOOOOOOO")
})