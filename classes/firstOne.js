function Person (name, job) {
 this.name = name;
 this.job = job;

 this.saying = function () {
     console.log('my name is:', this.name);
 }
}


var christin = new Person('christin','el jefe');
var kryptar = new Person('kryptar','drunk');



console.log(christin);
console.log(kryptar);

kryptar.job = 'party meister';

console.log(christin);
console.log(kryptar);


christin.saying();
kryptar.saying();
