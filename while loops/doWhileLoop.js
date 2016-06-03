//example

var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");
} while (loopCondition);

//while loops check condition at beginning
//do while loops check condition at end, so will execute AT LEAST once

//v1
var getToDaChoppa = function(){
    var i=2;
    do{
        console.log("It worked!");
        i++;
    }
    while(i<3);
};

getToDaChoppa();

//v2
function getToDaChoppav2(i){
    do{
        console.log("It worked!");
        i++;
    }
    while(i<3);
};

getToDaChoppav2(2);
