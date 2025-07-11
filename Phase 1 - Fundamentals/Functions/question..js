// Q: What's the difference between function declaration and expression in terms of hoisting?
abcd();
function abcd(){

}

abcd();
let abcd = function (){

}

// convert this function into an arrow function
function multiply(a, b) {
    return a * b;
}

let multiply = (a,b) => {
    return a * b;
};

// What does the ... operator mean in parameters?
function abcd(a, b, c, ...val) {
    console.log(a, b, c, val);
}
abcd (1, 2, 3, 4, 5, 6);

// Use rest parameter to accept any number of scores and return the total.
function getScore(...scores) {
    let total = 0;
    scores.forEach(function (val) {
        total = total + val;
    });
    return total; 
}   
getScore(12, 10, 14, 18);

// fix the function using early return
function checkAge(age) {
    if (age < 18) {
    console. log ("Too young");
    } else {
    console. log ("Allowed");
    }
}

function checkAge(age) {
    if (age < 18) return "Too young";
    return "Allowed";
}
console.log(checkAge(12));

// predict the output
function f() {
    return;
}
console.log(f());      // ans: undefined 

// What does it mean when we say "functions are first-class citizens"?
// ans : functions can be treated as values i.e they can be stored in a variable , passed inside an another function, etc.

// Can you assign a function to a variable and then call it? Show how.
let a = function(){

}
a();

// Pass a function into another function and execute it inside.
function fnc(val){
    val();
}
fnc(function() {
    console.log("hey");
});

// What is a higher-order function?
function abcd(){
    return function (){

    }
}

function abcd(val){
    val();
}
abcd(function(){

})

// identify high order function
[1, 2, 3].map(function (x) {
    return x * 2;
});     // ans : map

// impure function
let total = 0;
function addToTotal(num) {      // impure function as it is changing the value of an outside variable
    total += num;
} 

// pure function
// Convert the above function into a pure function.
let totals = 0;
function addToTotal(num) {
    let newtotal = total;
    newtotal += num;
}

// What is a closure? When is it created?
function abcd () {
    let val = 0;
    return function () {
    console.log(val);
    };
}

// what will log in closures
function outer() {
    let count = 0;
    return function () {
    count++;
    console. log (count);
    };
}
const counter = outer();
counter();                  // 1
counter();                  // 2

// Convert this normal function into an IIFE
function init() {
    console.log("Initialized");
}();

(function init() {
    console.log("Initialized");
})();

// What is the use of IIFE? Name one real-world use case.
let sher = (function () {
    let score = 0;
    return {
    getScore: function () {
    console.log(score);
    },
    setScore: function (val) {
    score = val;
    },
  };
})();

// What will be the output here and why?
greet();                          // error because it is a function exprerssion
var greet = function () {
    console.log("Hi!");
};

greet();                          // Hi!
function greet() { 
    console.log("Hi!");
}
