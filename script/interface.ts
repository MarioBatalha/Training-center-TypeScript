interface Person {
    name: string;
}
interface Employeer {
    salary: number;
}
let p: Person = {name: 'William Sousa'};
let emp: Employeer = {name: 'Rachel Smith', salary: 41}
console.log(emp);
console.log(p); 

interface Manager extends Employeer {
readonly bonus: number;
}
let manager: Manager = {name: 'Marcio', salary: 2000, bonus: 20};
manager.bonus = 23;
console.log(manager);