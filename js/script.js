/*
* comment
*/
let a = 10;
console.log(a);
let a = 20;
console.log(a);

//changeble variable

const b = "some text variable";
//unchangeable variable

console.log(typeof a);
console.log(typeof b);

let c = true;

console.log(typeof c);

let value = "3";

console.log(typeof value);
console.log(Number(value)); // turns string into number;
console.log(typeof value);

/*
parsing the value with letter to the numeric value
only numbers will left
numeric value will appear only if there are numbers
*/

console.log(Number.parseInt("5ddd"));
console.log(Number.parseInt(12gg994));
console.log(Number.parseInt("11.6dfkjh79"));
console.log(Number.parseInt("dfdg"));

// parseFloat works with numbers with commas.

console.log(Number.parseFloat("5ddd"));
console.log(Number.parseFloat(12gg994));
console.log(Number.parseFloat("11.6dfkjh79"));
console.log(Number.parseFloat("dfdg"));

// adding with the dots;

console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2);
console.log((0.1 * 10 + 0.2 * 10) / 10);

// Math object;
