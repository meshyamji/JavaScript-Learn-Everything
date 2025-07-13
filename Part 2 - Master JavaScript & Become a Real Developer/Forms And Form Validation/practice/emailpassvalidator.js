let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function(dets) {
    dets.preventDefault();

    document.querySelector("#email-error").textContent = "";
    document.querySelector("#password-error").textContent = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    let isValid = true;

    if(!emailans) {
        document.querySelector("#email-error").textContent = "Email is incorrect";
        document.querySelector("#email-error").style.display = "initial";
        isValid = false;
    }
    if(!passwordans) {
        document.querySelector("#password-error").textContent = "Password is incorrect";
        document.querySelector("#password-error").style.display = "initial";
        isValid = false;
    }

    if(isValid) {
        document.querySelector("#result-message").textContent = "Everything is Correct";
    }
});


// Chat GPT Suggestions
// let email = document.querySelector("#email");
// let password = document.querySelector("#password");
// let form = document.querySelector("form");

// form.addEventListener("submit", function (dets) {
//     dets.preventDefault();

//     document.querySelector("#email-error").textContent = "";
//     document.querySelector("#password-error").textContent = "";
//     document.querySelector("#result-message").textContent = "";
//     document.querySelector("#result-message").className = "result";

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

//     let emailans = emailRegex.test(email.value);
//     let passwordans = passwordRegex.test(password.value);

//     let isValid = true;

//     if (!emailans) {
//         document.querySelector("#email-error").textContent = "❌ Email is incorrect";
//         document.querySelector("#email-error").style.display = "initial";
//         isValid = false;
//     }

//     if (!passwordans) {
//         document.querySelector("#password-error").textContent = "❌ Password is incorrect";
//         document.querySelector("#password-error").style.display = "initial";
//         isValid = false;
//     }

//     if (isValid) {
//         document.querySelector("#result-message").textContent = "✅ Everything is correct!";
//         document.querySelector("#result-message").classList.add("success");
//     } else {
//         document.querySelector("#result-message").textContent = "❌ Please fix the above errors.";
//         document.querySelector("#result-message").classList.add("error");
//     }
// });
