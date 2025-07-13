// setInterval(function() {
//     console.log("hello");
// }, 5000);

// setTimeout(function() {
//     console.log("hello");
// }, 5000);

// let tm = setTimeout(function() {
//     console.log("hello");
// }, 3000);

// clearTimeout(tm);

// let count = 10;

let interval = setInterval(function() {
    if(count >= 0) {
        console.log(count);
        count--;
    } 
    else clearInterval(interval);
}, 1000);