
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(".btn").click(function() {
	var userChosenColour = $(this).attr("id");
	userClickedPattern.push(userChosenColour);
	playSound(userChosenColour);
	var animate = $(this);
	animatePress(animate);
	checkAnswer(userClickedPattern.length-1);
}); 

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("h1").text("Level "+level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
	var audio = new Audio("sounds/" + name + ".mp3");
  	audio.play();
}

function animatePress(currentColour) {
	
		currentColour.addClass("pressed");
		setTimeout(function() {
		currentColour.removeClass("pressed");
	}, 100);
	
}

$(document).keypress(function (event) {
	if (started === false) {
		nextSequence();
	}
	started = true;

	$("h1").text("Level "+level);
});

function checkAnswer(currentLevel) {
	if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) { //Checks if the most recent user's answer is the same as the game pattern.
		if (userClickedPattern.length === gamePattern.length){ //Checks that the user finished his/her sequence

	        setTimeout(function () { //In other words, once that the lenghts of the two arrays are equals, the next Sequence is triggered.
	          nextSequence();
	        }, 1000);
    	}

   	} else {
   		playSound("wrong");
   		$("body").addClass("game-over");
		setTimeout(function() {
		$("body").removeClass("game-over");
	}, 200);
		$("h1").text("Game Over, Press Any Key to Restart");
		startOver();
	}
}

function startOver() {
	level = 0;
	gamePattern = [];
	started = false;
}

