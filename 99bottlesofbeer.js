function beer() {
    var count = 99;
    while (count >= 0) {
        var count1 = count-1;
        if (count > 1) {
            console.log(count+" bootles of beer on the wall, "+count+" bottles of beer.\nTake one down and pass it around, "+count1+" bottles of beer on the wall");
        }
        if (count === 1) {
            count1 = "no more";
             console.log(count+" bootle of beer on the wall, "+count+" bottle of beer.\nTake one down and pass it around, "+count1+" bottles of beer on the wall");
        }
        if (count < 1) {
             console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottes of beer on the wall");
        }
         
        count--;
    }
}

beer();
