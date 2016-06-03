//want to run game as long as we're trying to kill the drag, ie slaying =true

var slaying = true;
var youHit = Math.floor(Math.random()*2);
console.log(youHit);

//assigns a number between 1 and 5
var damageThisRound = Math.floor(Math.random()*5+1);
console.log(damageThisRound);

var totalDamage = 0;

function weKillingDatDrag(){
    slaying = false;
    while(slaying){
        if (youHit === 1) {
            console.log("Great job you hit the drag");
            totalDamage += damageThisRound;

            if (totalDamage >= 3) {
                console.log("You done killed dat dragon");
                slaying = false;
            } else {
                var youHit = Math.floor(Math.random()*2);
            }

        } else {
            console.log("Dat drag kicked your ass");
        }
    }
};

weKillingDatDrag();
