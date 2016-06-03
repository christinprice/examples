var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

// printPerson added here
function printPerson(person) {
    return (person.firstName + " " + person.lastName);
}

console.log(printPerson(contacts[0]));
console.log(printPerson(contacts[1]));

//for loop to cycle through all names in contact list
function list(){

    var contactsLength = contacts.length;

    for (var i = 0; i < contactsLength; i++) {
        printPerson(contacts[i]);
    }
}

list();
