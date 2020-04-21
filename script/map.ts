let nameAge = new Map <string, number>();

nameAge.set('Inésio', 8);
nameAge.set('Kiess', 15);

console.log(nameAge);

for(let key of nameAge.keys()){
    console.log(key);
}
for(let value of nameAge.values()){
    console.log(value);
}