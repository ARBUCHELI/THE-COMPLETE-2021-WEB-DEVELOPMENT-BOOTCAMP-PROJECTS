var output = [];
var count = 1; // --> The biggest mistake here was to put the variable inside of the function as a local variable and not as a global.
function fizzfuzz() {
    if ((count % 3 === 0) && (count % 5 === 0)) {
        output.push("fizzfuzz");
    }
    else if (count % 3 === 0) {
        output.push("fizz");
    }
    else if (count % 5 === 0) {
        output.push("fuzz");
    }
    else {
        output.push(count);
    }
    count++;
    console.log(output);
}
