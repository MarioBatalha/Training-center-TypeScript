function trueOrFalse(flag = false) {
    let str = flag ? 'Flag is true' : 'Flag is false';
    console.log(str);
}
trueOrFalse();
//Anonymous function
const multDois = function (g) {
    return g * 2;
};
console.log(multDois(34));
//Arrow function
let fullName = (firstName, lastName) => console.log(firstName, '  ' + lastName);
fullName('Mario', 'Silva');
//# sourceMappingURL=Function.js.map