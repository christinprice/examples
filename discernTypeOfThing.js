//discern type of thing

var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log(typeof anObj); // should print "object"
console.log(typeof  aNumber); // should print "number"
console.log(typeof aString ); // should print "string"

// does object have a particular property?
var myObj = {
    // finish myObj
    name: "Christin",
    dog: true
};

console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false

//check if object has property, if statement that returns yes if true or creates property if false
var suitcase = {
    shirt: "Hawaiian"
};

if (suitcase.hasOwnProperty('shorts')) {
    console.log(suitcase.shorts);
} else {
    suitcase.shorts = "big ones";
    console.log(suitcase.shorts);
}
