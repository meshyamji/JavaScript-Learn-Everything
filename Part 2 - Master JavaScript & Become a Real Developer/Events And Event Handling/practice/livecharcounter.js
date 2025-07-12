let inp = document.querySelector("input");
let span =  document.querySelector("span");

inp.addEventListener("input", function(){
    let left = 20 - inp.value.length;
    span.textContent = left;

    if (left < 0) {
        span.style.color = "red";
    } else{
        span.style.color = "black";
    }


    // span.textContent = 20 - inp.value.length;
    // span.textContent = inp.value.length;
    
    // console.log(inp.value.length);
    // console.log("input hua");
});