let key: string = "key";
let key2: string = "key2";

console.log(sessionStorage.getItem(key));
console.log(sessionStorage.getItem(key2));

sessionStorage.setItem(key, "Mateus Tyson");
sessionStorage.setItem(key2, "Dário Pio");

console.log(sessionStorage.getItem(key));
console.log(sessionStorage.getItem(key2));
