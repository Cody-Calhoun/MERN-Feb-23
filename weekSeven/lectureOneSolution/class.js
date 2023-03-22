class Human {
    constructor(name, age) {
        // attributes
        this.name = name
        this.age = age
    }
    // methods
    sayHello(){
        console.log(`Hi my name is ${this.name}`)
    }
}

const will = new Human('Will', 30)
console.log(will)
will.sayHello()


class Student extends Human {
    constructor(name, age, grade) {
        super(name, age)
        this.grade = grade
    }
    sayHello(){
        console.log(`Hi my name is ${this.name} and I'm in grade ${this.grade}`)
    }
}