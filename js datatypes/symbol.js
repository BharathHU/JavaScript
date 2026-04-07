var sym1 = Symbol("id");
var sym2 = Symbol("id-560023");

console.log(typeof sym1);
console.log(typeof sym2);
console.log(sym1 == sym2);

// Correct way to print Symbols
console.log("Symbol 1:", sym1);
console.log("Symbol 2:", sym2);