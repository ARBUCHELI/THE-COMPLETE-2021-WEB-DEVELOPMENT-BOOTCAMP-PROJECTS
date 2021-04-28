const mongoose = require("mongoose");

// Connection URL
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
	name: {
		type: String,
		required: [true, "Please check your data entry, not name specified!"]
	},
	rating: {
		type: Number,
		min: 1,
		max: 10
	},
	review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

/*const fruit = new Fruit ({
	//name: "Apple",
	rating: 10,
	review: "Peaches are so yummy!"
});*/

//fruit.save();

const personSchema = new mongoose.Schema ({
	name: String,
	age: Number,
	favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit ({
	name: "Pineapple",
	score: 9,
	review: "Great Fruit!"
});

//pineapple.save();

const john = new Person ({
	name: "John",
	age: 37
})

//john.save();

const person = new Person ({
	name: "Amy",
	age: 12,
	favouriteFruit: pineapple
});

//person.save();

const kiwi = new Fruit ({
	name: "Kiwi",
	score: 10,
	review: "The best fruit!"
});

const orange = new Fruit ({
	name: "Orange",
	score: 4,
	review: "Too sour for me"
})

const banana = new Fruit ({
	name: "Banana",
	score: 3,
	review: "Weird texture"
});

/*Fruit.insertMany([kiwi, orange, banana], function(err){
	if (err) {
		console.log(err);
	} else {
		console.log("Succesfully saved all the fruits to fruitsDB.")
	}
})*/

/*Fruit.find(function(err, fruits) {
	if (err) {
		console.log(err);
	} else {

		mongoose.connection.close();

		fruits.forEach(function(fruit) {
			console.log(fruit.name);
		});
		
	}
});*/

/*Fruit.updateOne({_id: "60891e20806cb633a8650537"}, {name: "Peach"}, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log("Succesfully updated the document!");
	}
})*/

/*Fruit.deleteOne({name: "Apple"}, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log("Successfully deleted the document!");
	}
})

Fruit.deleteMany({name: "Peach"}, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log("Successfully deleted the document!");
	}
})

Fruit.deleteMany({name: "Pineapple"}, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log("Successfully deleted the document!");
	}
})

Person.deleteOne({name: "Amy"}, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log("Successfully deleted the document!");
	}
})

Person.deleteOne({name: "John"}, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log("Successfully deleted the document!");
	}
})*/

const mango = new Fruit ({
	name: "Mango",
	score: 10,
	review: "Sweet and very tasty!"
});

mango.save();

Person.updateOne({name: "John"}, {favouriteFruit: mango}, function(err) {
	if (err) {
		console.log(err);
	} else {
		mongoose.connection.close();
		console.log("Succesfully updated the document!");
	}
})






