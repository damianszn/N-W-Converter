var firstInput = prompt("Please write down the number between 0 and 999 you want to convert :");
var input = parseInt(firstInput);

//Function caller
var converterMain = function(float) {
    number = float;
    numberLength = number.toString().length;
    if(numberLength === 3){
        threeNumbers();
        dumbTester(true);
    }
    else if(numberLength === 2){
        twoNumbers();
        dumbTester(true);
    }
    else{
        oneNumber();
        dumbTester(true);
    }
}

//Converter 
var wordsMaker = function(int){
    switch(int){
        case 0:
            return "zero";
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
    }
}

var tensMaker = function(int, secondInt){
    switch(int){
        case 0:
            return "and";
        case 1:
            switch(secondInt){
                case 0:
                    return "ten";
                case 1:
                    return "eleven";
                case 2:
                    return "twelve";
                case 3:
                    return "thirteen";
                case 4:
                    return "fourteen";
                case 5:
                    return "fifteen";
                case 6:
                    return "sixteen";
                case 7:
                    return "seventeen";
                case 8:
                    return "eighteen";
                case 9:
                    return "nineteen";
            }
        case 2:
            return "twenty";
        case 3:
            return "thirty";
        case 4:
            return "forty";
        case 5:
            return "fifty";
        case 6:
            return "sixty";
        case 7:
            return "seventy";
        case 8:
            return "eighty";
        case 9:
            return "ninety";
    }
}

//Digit maker + output
var hundreds;var tens;var units;

var threeNumbers=function(){
    var hundredsThree = parseInt(number/100);
    var tensThree = parseInt((number/10)-(hundredsThree*10));
    var unitsThree = parseInt(number%10);
    hundreds = wordsMaker(hundredsThree);
    tens = tensMaker(tensThree, unitsThree);
    units = wordsMaker(unitsThree);
    if(tensThree === 0 && unitsThree ===0){
        alert("Your number is : "+number+" and we write it '"+hundreds+" hundred'.");
    }
    else if(tensThree === 1 || unitsThree ===0){
        alert("Your number is : "+number+" and we write it '"+hundreds+" hundred "+tens+"'.");
    }
    else{
    alert("Your number is : "+number+" and we write it '"+hundreds+" hundred "+tens+" "+units+"'.");
    }
}

var twoNumbers=function(){
    var tensTwo = parseInt(number/10);
    var unitsTwo = parseInt(number%10);
    tens = tensMaker(tensTwo, unitsTwo);
    units = wordsMaker(unitsTwo);
    if(tensTwo === 1 || unitsTwo === 0){
        alert("Your number is : "+number+" and we write it '"+tens+"'.");
    }
    else{
    alert("Your number is : "+number+" and we write it '"+tens+" "+units+"'.");
    }
}

var oneNumber=function(){
    var unitsOne = parseInt(number);
    units = wordsMaker(unitsOne);
    alert("Your number is : "+number+" and we write it '"+units+"'.");
}

//Number test
var dumbTester = function() {
    firstInput = prompt("Please write down the number between 0 and 999 you want to convert :");
    input = parseInt(firstInput); 
    if (input == null || input == "" || isNaN(input) || input<0 || input>999){
        alert("Read the sentence again.");
        dumbTester();
    }
    else{
        converterMain(input);
    }
}

if (input == null || input == "" || isNaN(input) || input<0 || input>999){
    alert("Read the sentence again.");
    dumbTester(false);
}
else{
    converterMain(input);
} 


