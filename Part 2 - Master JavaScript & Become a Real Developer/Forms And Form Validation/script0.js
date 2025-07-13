let nm = document.querySelector("#name");
let form = document.querySelector("form");

// form.addEventListener("submit", function(dets) {
//     dets.preventDefault();

//     if(nm.value.length <= 2) {
//         document.querySelector("#hide").style.display = "initial";
//     }
//     else {
//         document.querySelector("#hide").style.display = "none";
//     }
// });


form.addEventListener("submit", function(dets) {
    dets.preventDefault();

    // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;       // by ChatGPT
    // let ans = emailRegex.test("a@a.a");
    // console.log(ans);

    const regex = /^[a-zA-Z0-9._-]{3,20}$/;       // usernameRegex by GPT
    // let ans2 = regex.test("8*hy2-m.w");
    let ans2 = regex.test("shyam");
    console.log(ans2);
});