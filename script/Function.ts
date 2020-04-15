function trueOrFalse(flag: boolean = false): void{
    let str = flag? 'Flag is true' : 'Flag is false';
    console.log(str)
}
trueOrFalse()

//Anonymous function
 const multDois = function(g: number){
     return g * 2
 }
 console.log(multDois(34));
 //Arrow function
 let fullName = (firstName: string, lastName: string) => console.log(firstName '  '+ lastName);
 fullName('Mario','Silva')