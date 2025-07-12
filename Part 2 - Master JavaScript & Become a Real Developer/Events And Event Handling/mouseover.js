// let abcd = document.querySelector("#abcd");

// abcd.addEventListener("mouseover", function() {
//     abcd.style.backgroundColor = "yellow";
// });
// abcd.addEventListener("mouseout", function() {
//     abcd.style.backgroundColor = "red";
// });


// window.addEventListener("mousemove", function(dets){
//     console.log(dets.clientX,clientY);
//     // console.log(dets);
// });

// let abcd = document.querySelector("#abcd");

// window.addEventListener("mousemove", function(dets) {
//     abcd.style.top = dets.clientY + "px";
//     abcd.style.left = dets.clientX + "px";
// });


// window.addEventListener("keydown", (e) => {
//     document.body.style.backgroundColor = "lightblue";
// });

// window.addEventListener("keyup", (e) => {
//     document.body.style.backgroundColor = "white";
// });


// let abcd = document.querySelector("#abcd");

// abcd.addEventListener("click", function(eventsobj) {  // the data inside the function is called event object (e)
//     console.log(eventsobj);
// });


// let form = document.querySelector("form");

// form.addEventListener("submit", function(dets) {
//     dets.preventDefault();
// });


// event bubbling
// jispe event aayega agar uspar listener nahi hua to humaara event uske parent par listener dhundhega aur aisa krte krte upar ki taraf move karega
document.querySelector("#nav").addEventListener("click", function() {
    alert("clicked");
});