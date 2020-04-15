function reverseList<T>(list: Array<T>): Array<T>{
    let reversedList: T[] = [];
    for(let i = list.length - 1; i >= 0; i--){
        reversedList.push(list[i]);
    }
    return reversedList;
}
let names = ['Angela', 'Zaneth', 'Lisa'];
let numbers = [1,2,3,4,5,6];
let reversedNames = reverseList<string>(names);
let reversedNumbers = reverseList<string>(numbers);

console.log(reversedNames);
console.log(reversedNumbers);