//# sourceMappingURL=class.js.map
class Person {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    print(): void {
        console.log('name:' +this.name);
    }
}
class Employeer extends Person{
    salary: number;
    constructor(name: String, salary: number){
        super(name);
        this.salary = salary;
    }
}
let p1 = new Person('Lira');
let emp = new Employeer('Luisa', 5000);
p1.print();
emp.print();
