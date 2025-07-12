let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    console.log("button clicked");
});

c.addEventListener("click", function () {
    console.log("c clicked");
},true);

b.addEventListener("click", function () {
    console.log("b clicked");
});

a.addEventListener("click", function () {
    console.log("a clicked");
},
true        // event capturing activated
);

// jab bhi aap click krte ho ya koi bhi event raise krte ho to
// aapka jo event flow do phases mein chalta hai:
// phase 1: event top level element se neeche ki taraf aayega
// phase 2: event raised element se parent ki taraf jaayega
// aur pahle phase 1 hoti hai
// humesha phase 1 hi pahle hoti hai par vo by default off rahti hai, agar hum usey on kar dein to pahle phase 1 ka answer milega
//  1st phase - capture phase
//  2nd phase - bubblin phase
