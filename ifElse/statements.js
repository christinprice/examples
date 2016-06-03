function isEven(number) {
    if (number%2 === 0) {
        return true;
    } else {
        return false;
    }
};

isEven(40);

//isNAN on "40" will return false because it converts string to number so BE CAREFUL

function isEven(number) {

    if (number%2 === 0) {
        return true;
    }

    else if (isNaN(number)) {
        return "Not a number bitch";
    }

    else {
        return false;
    }
};

isEven("seventeen thirty eight");
isEven(40);
