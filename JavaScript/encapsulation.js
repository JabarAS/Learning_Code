class Employee {

    setDetails(name, id, phone) {
        this.name = name;
        this.id = id;
        this.phone = phone;
    }

    getName() {
        return this.name
    }
    getId() {
        return this.id;
    }
    getPhone() {
        return this.phone;
    }
}

let emp1 = new Employee();

emp1.setDetails('Roy', 1002, 08333495911);
console.log(emp1.getId());
console.log(emp1.getName());
console.log(emp1.getPhone());