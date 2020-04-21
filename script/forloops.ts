let array = ['Unitel', 'Movicel'];

for(let i=0; i< array.length; i++){
    console.log(array[i]);
}

array.forEach((name) => {
    console.log(name);
});

let person = {name: 'Mario', lastName: 'Batalha'};
for(let prop in person){
    console.log(person);
    console.log(prop)
}


for(let prop of person){
    console.log(prop)
}

