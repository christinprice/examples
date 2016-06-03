//for/in loop

/*
for (var key in object) {
  // Access that key's value
  // with object[key]
}
*/

var friends = new Object();

//object within an object
friends.bill = new Object();
friends.steve = new Object();

friends.bill.firstName = "Bill";
friends.bill.lastName = "Mosey";
friends.bill.number = "512-555-5555";
friends.bill.address = ['222 Loser Dr', 'Boulder', 'CO'];

friends.steve.firstName = "Steve";
friends.steve.lastName = "Herschleb";
friends.steve.number = "444-666-5555";
friends.steve.address = ['444 CTO Dr', 'Boulder', 'CO'];


function list(friendList) {

    for (var friend in friendList) {
        console.log(friend);
       console.log(friendList[friend].firstName);
       console.log(friendList[friend].lastName);
    }
};

// list(friends);

/*
var search = function(name) {
    for(var key in friends) {
        if(friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
};
*/

function search(name) {
    for (var friend in friends) {
        if(friends[friend].firstName === "Steve") {
            console.log(friends[friend]);
            return friends[friend];
        }

    }
