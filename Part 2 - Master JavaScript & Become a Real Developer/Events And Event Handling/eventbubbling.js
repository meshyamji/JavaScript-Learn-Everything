let ul = document.querySelector("ul");

ul.addEventListener("click", function(dets) {
    dets.target.classList.toggle("lt");
    // dets.target.style.textDecoration = "line-through";
    // console.log(dets.target);      // event is raised on the target
    // alert("clicked");       //event
});
