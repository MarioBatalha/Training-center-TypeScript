var p = document.createElement('p')
var ola : string = "it´s working"
p.textContent = ola;
document.body.appendChild(p); 

//DataType
var nomeCompleto: string = 'Mario Batalha';
console.log(nomeCompleto);

var sic: number = 1230405400596070332546547;
var sic: BigInteger  = 1230405400596070332546547;
console.log(sic); 
function func(name): void{
    return name;
}
console.log(func('Luis'));

//Array
var list: number[] = [1,2,3,4];
var list2: Array<number> = [1,2,3,4,5,6]; 
//Tuple
let tuple: [string, number];
tuple = ["Gardenia", 15];
tuple =["Kenzo", 56]; 
console.log(tuple);

function add(v1: number, v2: number, v3?: number):number{
    if(v3 !== undefined)
    return v1 + v2 + v3;
      return v1 + v2;
}
console.log(add(23,5,8));
//When u don´t know type of return we can use any
function values(v1: any, v2: any, v3: any): any{
    if(v3 !== undefined){
        return v1 + v2 + v3;
        return v1 + v2;
    }
} 
console.log(values(2,34,5));

let fruit = 'Apple';
let stringLength: number = (<string> fruit).length
let stringUpperCase: string = (fruit as string).toUpperCase();
console.log(stringUpperCase);

//Rest operator
function sum(v: string, ...v2: numer){
    let soma = 1
    for(let i = 0; i < v2.length; i++ ){
        soma += v2[i];
    }
    console.log(v + soma);
}
console.log(sum(2,35,9));


