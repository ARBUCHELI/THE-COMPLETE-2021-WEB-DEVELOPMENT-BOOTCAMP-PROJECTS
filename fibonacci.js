function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    var arr = [0, 1];
    var answer;
    if (n === 1) {
      answer = arr.pop();
    }
    if (n === 2) {
      answer = arr;
    }
    if (n > 2) {
        for (var i=2; i<=n-1; i++) {
          answer = arr.push(arr[i-1]+arr[i-2]);
        }
    }
   

    return arr;
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

fibonacciGenerator(13);
