function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    var index = Math.random();
    var realIndex = Math.floor(index*names.length);
    return names[realIndex]+" is going to buy lunch today!"
    
    
    


/******Don't change the code below*******/    
}

var paganini = whosPaying(["hugo", "paco", "luis"]);
console.log(paganini);
