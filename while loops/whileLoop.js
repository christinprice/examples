//in situations where you don't know in advance when to stop looking, we use "while" loop
//eg choose cards from deck until you get a space
//use when you dont know how many times you will have to execute loop

/*
while(condition){
    // Do something!
}
*/

//as long as condition evaluates to true, the loop will continue to run. as soon as it's false, it wills stop

var understand = true;
var count = 0;


while(understand){
    var value = Math.round(Math.random()*100);
    count++;

    if (value > 90) {
        console.log("DONE:", value);
        understand = false;
    } else {
      console.log("FAIL:", value);
    }
}

console.log('it took me %d times', count);

/* printed out

FAIL: 32
DONE: 92
it took me 2 times

*/

//example v2 (couldve used for loop)

var loop = function(){

	while(count<3){
	    count++;
		console.log("I'm looping!")

	}
};

loop();

//output from v2
/*
I'm looping!
I'm looping!
I'm looping!
*/

//while
//single equal sign is an assignment
//mult equals is a comparison, will return either true or false
//== vs ===, double "coerces", would return true for 5=="5";
//5==="5" will return false

var morning = ["Good","Awesome"];
var count = 0;

function howWasYourMorning(){
    while (morning[count]==="Good") {
        console.log("Glad to hear it");
        count++;
    }
};

howWasYourMorning();
