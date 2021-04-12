var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var name = prompt("What's your name?:");
if (guestList.includes(name) === true) {
    alert("Welcome "+name);
}
else {
    alert("Who the hell are you");
}
