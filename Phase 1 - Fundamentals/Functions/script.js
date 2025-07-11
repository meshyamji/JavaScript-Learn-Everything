// function statement
function fnc1() {

}
fnc1();

// function expression
let fnc2 = function () {
    console.log("hey");
};
fnc2();

// fat arrow function
let fnc3 = () => {
    console.log("heyo");
}
fnc3();

// functions and parameters
function dance(v1) {
    console. log(`${v1} naach raha hai`);
}
dance ("ghoda");
dance ("hirad");
dance ("cheel" );
dance ("lakadbaggha");
dance("horse");

function add (v1, v2) {      // v1,v2 are parameters
    console.log(v1 + v2);
}
add (1, 2);                  // 1,2 are arguments
add (11, 22);
add (111, 222); 

// default parameters
function add(v1 = 0, v2 = 0) {
    console.log(v1 + v2);
}
add (1, 2);

// jab arguments kai saare ho to humein utne hi parameter banaane padege, issey bachne ke liye, hum rest ka use karte hai ... agar ... function ke parameter space mein lage to wo rest operator hai and agar wo arrays and objects mein lageto wo spread operator
// rest parameters
function abcd(...val) {
    console.log(val);
}
abcd(1, 2, 3, 4, 5, 6);

function abcd(a,b,c,...val) {
    console.log(a,b,c,val);
}
abcd(1, 2, 3, 4, 5, 6); 

// return
// return matlab jaha se aaye ho wahi daal denge
function abcd() {
    return 12;
}
let val = abcd ();
console.log(val);

function abcd (v) {
    return 12 + v;
}
let val = abcd(23) ;
console.log(val);

// first class fncs →> functions ko values ki tarah treat karo
let abcd = function(){

};

function abcd(val) {
    val();
}
abcd(function(){
    console.log("yoo");
});

// (high order functions)hof wo function hota hai jo ki return kare function ya fir acceept kare ek fnc apne parameter mein
function abcd(val) {
    val();
}
abcd(function(){

};)

function abcd() {
    return function(){
        console.log("huh")
    }
}
abcd()();

// pure vs impure functions
// aisa fnc jo ki baahar ki value ko naa badle wo hai pure function
let a = 12;
function abcd() {
    console.log("hehehe");
}
// aisa fnc jo baahar ki value ko badal de wo hai impure function
function hui() {
    a++;
}

// closures and lexical scoping
// closures → ek fnc jo return kare ek aur function aur return hone waala function humesha youse karega parent fnc ka koi variable
function abcd() {
    let a = 12;
    return function() {
        console.log(a);
    }
}
// lexical scoping
function abcd() {
    let a = 12;
    function defg() {
        let b = 13;
        function ghij() {
            let c = 14;
        }
    }
}

// IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("hey");
})();

// • Hoisting differences between declaration and expression
// Hoisting is not allowed in function expression
abcd();

let abcd = function () {
    console.log("heyehey");
};
// Hoisting is allowed in function declaration
abcd()

function abcd(){
    console.log("hihihih")
}

//-------------------------------------------------------------------------------
// Common Confusion
// > when to use normal / regular functions and when to use arrow functions?
// whenevr creating functions, we can always use arrow functions except when we are creating objects, and we create a function inside a object in key-value pair then there we cannot use arrow functions, if we do so then this keyword would be created.

// > function hoisting and TDZ(temporal dead zone)
greet(); // ✅ Works

function greet() {
    console.log("Hello");
}
// Function declarations are hoisted, meaning the function is available even before its definition in the code.

greet(); // ❌ Error: Cannot access 'greet' before initialization
const greet = () => {
    console.log("Hello");
};
// Function expressions assigned to const, let, or var are not hoisted the same way.
// The variable greet is in a "temporal dead zone" until it's defined, so calling it before the definition throws an error.
// | Style                    | Hoisted? | Can Call Before Declaration? |
// | ------------------------ | -------- | ---------------------------- |
// | `function greet() {}`    | ✅ Yes    | ✅ Yes                     |
// | `const greet = () => {}` | ❌ No     | ❌ No                      |

