//print names of all properties in an object using for in loop

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

function printProps (property){
    for (var property in nyc) {
        console.log(property);
    }
}

printProps()

/*OUTPUT

fullName
mayor
population
boroughs

*/

//prints all value of all properties in an object

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties

for (var x in nyc) {
    console.log(nyc[x]);
}

/*prints---->
New York City
Bill de Blasio
8000000
5
*/
