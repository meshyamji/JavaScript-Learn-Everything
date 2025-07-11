// data types
// data ka type

// 12 Shyam true [] {} () null undefined NaN Symbol biglnt

// primitives
// refrences 

// primitives —> aisi saari values jinko copy karne par tumhe ek real copy mil jaaye
// string, number, boolean, null, undefined, symbol, bigint

// reference —> inko copy karne par real copy nahi milegi but aapko reference mi lega parent ka
// arrays, objects, functions
// [] {} ()

let a = 12;
let b = a;
a = a + 2;

let c = [1,2,3];
let d = a;
d.pop();

// Primitives
// strings
// '' - single quotes
// "" - double quotes
// `` - backticks

// numbers
// 12 integer
// 12.1 number

// true and false
let e = true;
let f = false;

// null ka matlab hai aapne jaan boojh kar koi value nahi di
let selectedStudents = null;

// undefined ka matlab ki aapne ek variable banaya aur usey value nahi di to jo value by default mili wo hai undefined
let a;

// symbol —> unique immutable value
// future mein hum koi libraries use karege ab is case mein un libraries mein kai baar kuchh fields hoti hai jinse similar hum bhi banaa dete hai aur galti se humaari banaai hui fields us library ki original fields ko change kar deta hai
let sheryjs{
    uid : 12,
    model = "harsh",
    uid
}
sheryjs.uid = 1;

// Symbol
let u01 = Symbol("uid");
let u02 = Symbol("uid");
u1 === u2 //❌

let obj = {
uid: 1,
name: "shyam",
age: 12,
email: "test@test.com"
};
let u1 = Symbol("uid");
obj [u1] = "001";

// bigint
Number.MAX_SAFE_INTEGER
let a = 9007199254740991n;

// Refrence

let a = [11,2,31];
let b = a;
b.pop ();

let a = {
name: "harsh",
};
let b = a;
b. name = "harshita";

// Dynamic typing > js mein static typing nahi hai and yaha par hai dynamic typing jiska matlab hai aap data ko change kr skte ho kyukli yaha par dynamic data types hai
let a = 12;
a = true;
a = "shyam";
a = [];
a = null;
a = undefined;

// typeof quirks (e.a., tvpeof null === 'obiect')
typeof "Hello" // "string"
typeof 99 // "number"
typeof true // "boolean"
typeof undefined // "undefined"
typeof null // "object" ← known bug
typeof [] // "object"
typeof {} // "object"
typeof function(){} // "function"
typeof NaN; // "object"
// Note: typeof null === "object" is a bug, but has existed since the early days of JS.

// type coercion → concept jismein aapka ek type automatically convert hojaayega
"5" + 1 // '51'
"4" - 1 // 3

// Type coercion (== vs ===)
5 == "5" // true, == compares value with type conversion
5 === "5" // false, === compares value + type (no conversion)

// Truthy vs falsy values
// 0 false "" null undefined NaN document.all →> false
// rest all -> true
// 1 is converted into true in boolean
// to check use ->  !!Number
// rest all of the values are true
// Always prefer === for accurate comparisons.
