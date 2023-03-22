class Human {
    constructor(name, age) {
        // attributes
        this.name = name;
        this.age = age;
    }
    // methods
    sayHello() {
        console.log(`Hello, I'm ${this.name}`);
    }
}
const will = new Human('Will', 30);
const john = new Human('John', 25);
// john.sayHello();

class Student extends Human {
    constructor(name, age, currentStack) {
        super(name, age);
        this.currentStack = currentStack;
    }
    sayHello() {
        console.log(`Hello, I'm ${this.name} and I'm studying ${this.currentStack}`);
    }

}

const gray = new Student('Gray', 25, 'MERN');
gray.sayHello();
