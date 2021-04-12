//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
function bmiCalculator (weight, height) {
    var message = "";
    var bmi = Math.round(weight /(Math.pow(height,2)));
    if (bmi < 18.5) {
        message = "Your BMI is "+bmi+", so you are underweight.";
    }
    if (bmi >= 18.5 && bmi <24.9) {
        message = "Your BMI is "+bmi+", so you have a normal weight.";
    }
    if (bmi > 24.9) {
        message = "Your BMI is "+bmi+", so you are overweight.";
    }
    return message;
}



/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
var answer = bmiCalculator(65, 1.8);
console.log(answer);
