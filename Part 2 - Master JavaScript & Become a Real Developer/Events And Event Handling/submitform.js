let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", inputs[0].value);
    // img.setAttribute("src", "https://images.unsplash.com/photo-1593179449458-e0d43d512551?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9yc2V8ZW58MHx8MHx8fDA%3D");

    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value;
    // h3.textContent = "Ghoda Ghudaiya";
    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value;
    // h5.textContent = "Ghoda";
    let p =  document.createElement("p");
    p.textContent = inputs[3].value;
    // p.textContent = "Ghoda is a very good jaanwar and ghoda is a tall  janawr.";

    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);
    // console.log(card);

    inputs.forEach(function (inp) {
        if (inp.type !== "submit") {
            inp.value = "";       // use empty string, not " "  i.e. space 
        }
    });
    form.reset(); // clear input fields
});


// // AI Suggetions
// const form = document.querySelector("form");
// const main = document.querySelector("#main");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const name = form.elements["name"].value;
//     const age = form.elements["age"].value;
//     const email = form.elements["email"].value;
//     const profilePic = form.elements["profilePic"].value;

//     const card = document.createElement("div");
//     card.classList.add("card");

//     card.innerHTML = `
//         <div class="profile">
//             <img src="${profilePic}" alt="">
//         </div>
//         <h3>${name}</h3>
//         <h5>${age} | ${email}</h5>
//         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
//     `;

//     main.appendChild(card);
//     form.reset();
// });
