//Two prompst that ask for the names of the two people.
//Calculate a random number that is a percentage. (between 1 and 100)
//Generate an alert telling what is the love score.
prompt("Enter your name: ");
prompt("Enter your crush name: ")
var n = Math.random();
n = n*100;
n = Math.floor(n) + 1;
alert("The match of you and your real love is "+n+"%");
