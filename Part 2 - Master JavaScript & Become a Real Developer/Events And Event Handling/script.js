// browser mein page par koi bhi harkat karo event raise ho jaayega
// kuchh screen par ho aur aapko reaction dena ho to us waqt aapko event handle karna aana chahive
// event matlab hota hai koi action hua
// event listener ka matlab hai aapne koi action ka reaction diya


// let h1 = document.querySelector("h1");
// h1.addEventListener("click", function () {
//     h1.style.color = "red";
// });


// note - select the paragraph first 
// let p =  document.querySelector("p");
// p.addEventListener("click", function() {
//     p.style.color = "green";
// });

// let p = document.querySelector("P");
// p.addEventListener("dblclick", function() {
//     p.style.color = "yellow";
// });

// element.addEventListener("event name", function () {});


// removing an event listener
// let p = document.querySelector("p");
// function dblclick() {
//     p.style.color = "orange";
// }
// p.addEventListener("dblclick", dblclick);
// p.removeEventListener("dblclick", dblclick);


// let p = document.querySelector("p");
// p.addEventListener("click", function () {
//     p.style.color = "red";
// });


// let inp = document.querySelector("input");
// inp.addEventListener("input", function(evt) {
//     // console.log("typed");
//     // console.log(evt);
//     console.log(evt.data);
// });

// let inp = document.querySelector("input");
// inp.addEventListener("input", function (details) {
//     // console.log("h");
//     // console.log(details);
//     console.log(details.data);
// } );

// let inp = document.querySelector("input");
// inp.addEventListener("input", function (details) {
//    if(details.data !== null) {
//     console.log(details.data);
//    }
// } );


// change event tab chalta hai jab aapka koi input select ya text area mein koi change hojaaye
let sel = document.querySelector("select");
let device = document.querySelector("#device");
// sel.addEventListener("change", function (dets) {
//     console.log(dets.target.value);
// });
sel.addEventListener("change", function(dets) {
    // device.textContent = "Device Selected";
    device.textContent = `${dets.target.value} Device Selected`;
});

