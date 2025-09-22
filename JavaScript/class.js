class Employee {
    //build function dan parameter
    setDetails(name, id) {
        this.name = name
        this.id = id
    }
}

let emp1 = new Employee();
emp1.setDetails('roy', 1001)
console.log(emp1.name)
console.log(emp1.id)

// constructors

class Task {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

let task1 = new Task('jhon', 1001);
let task2 = new Task('soy', 1002);
console.log(task1.name);
console.log(task1.id);
console.log(task2.name);
console.log(task2.id);