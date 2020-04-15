var p = document.createElement('p');
var ola = "it´s working";
p.textContent = ola;
document.body.appendChild(p);
//DataType
var nomeCompleto = 'Mario Batalha';
console.log(nomeCompleto);
var sic = 1230405400596070332546547;
var sic = 1230405400596070332546547;
console.log(sic);
function func(name) {
    return name;
}
console.log(func('Luis'));
//Array
var list = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4, 5, 6];
//Tuple
let tuple;
tuple = ["Gardenia", 15];
tuple = ["Kenzo", 56];
console.log(tuple);
function add(v1, v2, v3) {
    if (v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;
}
console.log(add(23, 5, 8));
//When u don´t know type of return we can use any
function values(v1, v2, v3) {
    if (v3 !== undefined) {
        return v1 + v2 + v3;
        return v1 + v2;
    }
}
console.log(values(2, 34, 5));
let fruit = 'Apple';
let stringLength = fruit.length;
let stringUpperCase = fruit.toUpperCase();
console.log(stringUpperCase);
//Rest operator
function sum(v, ...v2) {
    let soma = 1;
    for (let i = 0; i < v2.length; i++) {
        soma += v2[i];
    }
    console.log(v + soma);
}
console.log(sum(2, 35, 9));
//# sourceMappingURL=helloworld.js.map