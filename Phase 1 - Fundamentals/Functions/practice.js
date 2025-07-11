// WWP for BMI Calculator
function BMI(weight, height) {
    return weight / (height * height);
}

console.log(BMI(69, 1.7).toFixed(2));

// create a reusable discount calculator (HOF - high order function)
function discountCalculator(discount) {
    return function (price) {
        return price - price * (discount/100);
    };
}

let ten = discountCalculator(10);
let twenty = discountCalculator(20);

console.log(ten(1200));
console.log(twenty(1200));

// Build a counter using closure
function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

let c = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());

let d = counter();
console.log(d());
console.log(d());
console.log(d());
console.log(c());

// create a pure function to transform a value
function double(val) {
    return val * 2;
}
console.log(double(15));

// use IIFE to isolate variables
(function () {
    const password = "secret code/password";  // private/secret variables
    console.log(password);
})();                   // immediately invoked function
console.log(password);  // inaccessible outside
