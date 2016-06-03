function Dog (breed) {
    this.breed = breed;
};

// add the sayHello method to the Dog class
// so all dogs now can say hello
Dog.prototype.sayHello = function(){
    console.log("Hello this is a "+this.breed+" dog");
}

var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();

//returns "Hello this is a golden retriever dog" & "Hello this is a dachshund dog"
