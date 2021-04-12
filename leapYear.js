function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here. 
    var message = "";   

    if (year % 4 != 0){
        message = "Not leap year.";
    }

    if (year % 4 == 0 && year % 100 != 0) {
        message = "Leap year.";
    }

    if (year % 4 == 0 && year % 100 == 0 && year % 400 != 0) {
        message = "Not leap year.";
    }
    if (year% 4 == 0 && year % 100 == 0 && year % 400 == 0) {
        message = "Leap year."
    }
   
    return message;    

/**************Don't change the code below****************/    

}

isLeap(1998);
