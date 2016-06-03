//prints out 1 to 10
for (var i = 1; i < 11; i = i + 1) {
	console.log(i);
};


//counts from 4 to 23
for (var i = 4; i < 24; i = i + 1) {
	console.log(i);
};

//increment up by 1 --> write i++
//decrement down by 1 --? i--
//increment up by any value by writing i += x (x is how much we want to increment by)
//decrement down by any value by writing i -= x

//starts at 5, increments by 5 up to 50 (5, 10, 15, 20, 25, 30, 35, 40, 45, 50)
for (var i = 5; i < 51; i += 5) {
	console.log(i);
}
//equiv
for (var i = 0; i < 5; i++) {
	console.log(i*5);
}

//
var string = "hello";
string = string + ' world';

string += " world";

//INFINITE LOOPS (ones who never have a condition not met) will crash browser
//ex below DO NOT RUN

/*
for (var i = 1; i >= 1; i++) {
	console.log(i);
}
*/

//10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
for (var i = 10; i >= 0; i--) {
	console.log(i);
}

//prints out each name after "I know someone called" for all 5 elements

var names = ["Christin","Allison","Molly","David","Marti"];

for (var i = 0; i < names.length; i++) {
    console.log("I know someone called "+names[i]);
};
