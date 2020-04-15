function reverseList(list) {
    let reversedList = [];
    for (let i = list.length - 1; i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
}
let names = ['Angela', 'Zaneth', 'Lisa'];
let numbers = [1, 2, 3, 4, 5, 6];
let reversedNames = reverseList(names);
let reversedNumbers = reverseList(numbers);
console.log(reversedNames);
console.log(reversedNumbers);
//# sourceMappingURL=generics.js.map