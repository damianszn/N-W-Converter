var firstInput = prompt("Veuillez écrire le nombre de 0 à 999 à convertir :");
input = parseInt(firstInput);

//Function caller
var converterMain = function(int) {
    number = int;
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
            return "zéro";
        case 1:
            return "un";
        case 2:
            return "deux";
        case 3:
            return "trois";
        case 4:
            return "quatre";
        case 5:
            return "cinq";
        case 6:
            return "six";
        case 7:
            return "sept";
        case 8:
            return "huit";
        case 9:
            return "neuf";
    }
}

var tensMaker = function(int, secondInt){
    switch(int){
        case 0:
            return "et";
        case 1:
            switch(secondInt){
                case 0:
                    return "dix";
                case 1:
                    return "onze";
                case 2:
                    return "douze";
                case 3:
                    return "treize";
                case 4:
                    return "quatorze";
                case 5:
                    return "quinze";
                case 6:
                    return "seize";
                case 7:
                    return "dix-sept";
                case 8:
                    return "dix-huit";
                case 9:
                    return "dix-neuf";
            }
        case 2:
            return "vingt";
        case 3:
            return "trente";
        case 4:
            return "quarante";
        case 5:
            return "cinquante";
        case 6:
            return "soixante";
        case 7:
            switch(secondInt){
                case 0:
                    return "soixante-dix";
                case 1:
                    return "soixante et onze";
                case 2:
                    return "soixante et douze";
                case 3:
                    return "soixante-treize";
                case 4:
                    return "soixante-quatorze";
                case 5:
                    return "soixante-quinze";
                case 6:
                    return "soixante-seize";
                case 7:
                    return "soixante-dix-sept";
                case 8:
                    return "soixante-dix-huit";
                case 9:
                    return "soixante-dix-neuf";
            }
        case 8:
            return "quatre-vingts";
        case 9:
            switch(secondInt){
                case 0:
                    return "quatre-vingts-dix";
                case 1:
                    return "quatre-vingts-onze";
                case 2:
                    return "quatre-vingts-douze";
                case 3:
                    return "quatre-vingts-treize";
                case 4:
                    return "quatre-vingts-quatorze";
                case 5:
                    return "quatre-vingts-quinze";
                case 6:
                    return "quatre-vingts-seize";
                case 7:
                    return "quatre-vingts-dix-sept";
                case 8:
                    return "quatre-vingts-dix-huit";
                case 9:
                    return "quatre-vingts-dix-neuf";
            }
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
    if(hundredsThree === 1){
        if(tensThree === 0 && unitsThree ===0){
            alert("Votre nombre est : "+number+" et s'écrit 'cent'.");
        }
        else if (unitsThree ===0){
            alert("Votre nombre est : "+number+" et s'écrit 'cent "+tens+"'.");
        }
        else{
            alert("Votre nombre est : "+number+" et s'écrit 'cent "+tens+" "+units+"'.");
        }
    }
    else if(tensThree === 0 && unitsThree ===0){
        alert("Votre nombre est : "+number+" et s'écrit '"+hundreds+" cent.'");
    }
    else if(unitsThree ===0 || tensThree ===0 || tensThree === 1 || tensThree === 7 || tensThree === 9){
        alert("Votre nombre est : "+number+" et s'écrit '"+hundreds+" cent "+tens+"'.");
    }
    else{
    alert("Votre nombre est : "+number+" et s'écrit '"+hundreds+" cent "+tens+" "+units+"'.");
    }
}

var twoNumbers=function(){
    var tensTwo = parseInt(number/10);
    var unitsTwo = parseInt(number%10);
    tens = tensMaker(tensTwo, unitsTwo);
    units = wordsMaker(unitsTwo);
    if(unitsTwo ===0 || tensThree ===0 || tensTwo === 1 || tensTwo === 7 || tensTwo === 9){
        alert("Votre nombre est : "+number+" et s'écrit '"+tens+"'.");
    }
    else{
    alert("Votre nombre est : "+number+" et s'écrit '"+tens+" "+units+"'.");
    }
}

var oneNumber=function(){
    var unitsOne = parseInt(number);
    units = wordsMaker(unitsOne);
    alert("Votre nombre est : "+number+" et s'écrit '"+units+"'.");
}

//Number test
var dumbTester = function() {
    firstInput = prompt("Veuillez écrire le nombre de 0 à 999 à convertir :");
    input = parseInt(firstInput);   
    if (input == null || input == "" || isNaN(input) || input<0 || input>999){
        alert("Veuillez relire la phrase.");
        dumbTester();
    }
    else{
        converterMain(input);
    }
}

if (input == null || input == "" || isNaN(input) || input<0 || input>999){
    alert("Veuillez relire la phrase.");
    dumbTester();
}
else{
    converterMain(input);
}


