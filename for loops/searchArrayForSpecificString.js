/*Okay! Last loopy step: add another for loop, this time inside the body of your if statement (between the if's {}s).

This loop will make sure each character of your name gets pushed to the final array. The if statement says:
"If we find the first letter of the name, start the second for loop!"
This loop says: "I'm going to add characters to the array until I hit the length of the user's name."
So if your name is 11 letters long, your loop should add 11 characters to hits if it ever sees the first letter of myName in text.
*/

/*jshint multistr:true */

var text = "Well hello there Christin, how is your day going. Do you plan to eat \ dinner Christin?";

var myName = "Christin";

//empty array
var hits = [];

//if statement will say: if you see something interesting, push that text into array!

for (var i = 0; i < text.length; i++) {
    if (text[i]==='C'){
       for(var j = i; j < i+myName.length; j++){
            hits.push(text[j]);
       }
    }
};

console.log(hits);

//returns [ 'C', 'h', 'r', 'i', 's', 't', 'i', 'n', 'C', 'h', 'r', 'i', 's', 't', 'i', 'n' ]
