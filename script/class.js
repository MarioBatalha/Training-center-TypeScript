//# sourceMappingURL=class.js.map
class Person {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log('name:' + this.name);
    }
}
class Employeer extends Person {
    constructor(name, salary) {
        super(name);
        this.salary = salary;
    }
}
let p1 = new Person('Lira');
let emp = new Employeer('Luisa', 5000);
p1.print();
emp.print();
//# sourceMappingURL=class.js.map