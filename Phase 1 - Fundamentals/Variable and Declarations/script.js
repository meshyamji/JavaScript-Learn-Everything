// var, let, const
// var
var score = 10;
var score = 20; // OK


// let
let age = 25;
age = 30; // ✅
age = 40; // ❌ Error (same block)


// const
const PI = 3.14;
PI = 3.14159; // ❌ Error

const student = { name: "Riya" };
student.name = "Priya"; // ✅ OK
student = {}; // ❌ Error


// scope
{
var x = 5;
let y = 10;
const z = 15;
}
console.log(x); // ✅ 5
console.log(y); // ❌ ReferenceError
console.log(z); // ❌ ReferenceError


// Noisting
console.log(a); // undefined
var a = 10;

console.log(b); // ❌ ReferenceError
let b = 20;
