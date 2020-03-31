function teste(i: number){

    if(i === 10){
        var valor = 20;
    }else{
        var valor = 30;
    }
    console.log(valor)
}
//Boolean variable
var isNew: boolean = false:
isNew = true;
console.log(isNew);

//Number variable
var age: number = 21;

var pi: number;
pi = 3.1141516;

//String variable
var name: string = ' name undefined';
name = 'Luis';

//Template strings
let name = 'Luis';
let expression = 'Hi, ${name} how have u been?';

console.log(expression);

//Array
var list1: number[]  = [1,2,3,];

let i: any;
for(i in list1){
    console.log(list1[i])
}

var list2: Array<number> = [8,12,33];
console.log('First element in list2 => ${list2[0]}');

var list3: number[]
list3 = [5,4,3];
list3.forEach( (p) => console.log(p) );

var alpha = ['a', 'b','c'];
var numeric = ['1','2','3'];

var alphaNumeric = alpha.concat(numeric);
console.log('alphaNhumeric :' + alphaNumeric);
alphaNumeric.push('0989');
console.log('alphaNumeric : ' + alphaNumeric);

//Tuple array
var tp : [string, number] = ['Tiago', 29];

tp.push(100);
tp.push('Bruno');
tp.forEach((o) => console.log(o));


