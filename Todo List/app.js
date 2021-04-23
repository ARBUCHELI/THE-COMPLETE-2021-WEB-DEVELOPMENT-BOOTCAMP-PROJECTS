/*Boiler Plate for Servers*/
const express = require("express");        /*Requiring the packet*/
const bodyParser = require("body-parser"); /*Requiring the packet*/
const date = require(__dirname + "/date.js");



const app = express();                     /*Creating the app constant by using express*/

//let item = "";

const items = ["Buy Food", "Cook Food", "Eat Food"];

const workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {          /*Creating the get route that sends the browser the word Hello when a user tries to*/

	let day = date.getDate();

	res.render("list", {
		listTitle: day, 
		newListItems: items
	});

});    

app.post("/", function(req, res) {

	let item = req.body.newItem;

	if (req.body.list === "Work") {
		workItems.push(item);
		res.redirect("/work");
	} else {
		items.push(item);
		res.redirect("/")
	}
});

app.get("/work", function(req, res) {
	res.render("list", {
		listTitle: "Work list",
		newListItems: workItems
	});
});

app.post("/work", function(req, res) {
	let item = req.body.newItem;
	workItems.push(item);
	res.redirect("/work");
});


app.get("/about", function(req, res) {
	res.render("about");
});


app.listen(3000, function() {              /*Set to listen on port 3000*/
	console.log("Server started on port 3000");
});