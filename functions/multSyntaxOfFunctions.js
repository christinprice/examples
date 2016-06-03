//function v1
var orangeCost = function(price) {
    console.log(price*5);
};

//call
orangeCost(5);

//function v2
function appleCost(price) {
    console.log(price*10);
};

//call
appleCost(5);

//above is identical w 2 diff syntaxes

//scripting - can only use the function one "immediately invoked function"
(function (price) {
    console.log(price*10);
})(6);

//if else within a function
function sleepCheck(numHours){
    if (numHours >= 8){
        return "You're getting plenty of sleep! Maybe even too much!";
    } else {
        return "Get some more shut eye!";
    }
};

console.log(sleepCheck(10));
console.log(sleepCheck(5));
console.log(sleepCheck(8));
