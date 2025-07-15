// new cards create karne hai, data local storage mein save karna hai
// localstorage se hi cards ko show karna hai
// buttons ko handle karna hai
// filters ko handle karna hai

// All selectors
let addNote = document.querySelector("#add-note");
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".closeForm");
let form = document.querySelector("form");
let stack = document.querySelector(".stack"); // Container where cards will appear
let upBtn = document.querySelector("#upBtn");
let downBtn = document.querySelector("#downBtn");

// Form input fields
const imageInput = form.querySelector("input[placeholder^='http']");
const nameInput = form.querySelector("input[placeholder='Enter full name']");
const townInput = form.querySelector("input[placeholder='Enter home town']");
const purposeInput = form.querySelector("input[placeholder^='e.g.']");
const categoryRadios = form.querySelectorAll("input[name='category']");

// Show the form
addNote.addEventListener("click", function () {
  formContainer.style.display = "initial";
});

// Hide the form
closeForm.addEventListener("click", function () {
  formContainer.style.display = "none";
});

// Save card data to localStorage
function saveToLocalStorage(obj) {
  let oldTasks = localStorage.getItem("tasks");

  if (oldTasks === null) {
    localStorage.setItem("tasks", JSON.stringify([obj]));
  } else {
    oldTasks = JSON.parse(oldTasks);
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  }
}

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get trimmed input values
  const image = imageInput.value.trim();
  const name = nameInput.value.trim();
  const town = townInput.value.trim();
  const purpose = purposeInput.value.trim();
  const category = Array.from(categoryRadios).find((radio) => radio.checked);

  // Remove previous error messages
  document.querySelectorAll(".error-msg").forEach((el) => el.remove());
  let isValid = true;

  // Show error helper
  function showError(input, message) {
    const error = document.createElement("small");
    error.className = "error-msg";
    error.style.color = "red";
    error.style.fontSize = "12px";
    error.textContent = message;
    input.insertAdjacentElement("afterend", error);
    isValid = false;
  }

  // Validation checks
  if (!image || !image.startsWith("http")) {
    showError(imageInput, "Please enter a valid image URL.");
  }
  if (!name) {
    showError(nameInput, "Please enter your full name.");
  }
  if (!town) {
    showError(townInput, "Please enter your hometown.");
  }
  if (purpose.length < 5) {
    showError(purposeInput, "Purpose must be at least 5 characters.");
  }
  if (!category) {
    showError(categoryRadios[0].closest("label"), "Please select a category.");
  }

  // Save and show if valid
  if (isValid) {
    saveToLocalStorage({
      image,
      name,
      town,
      purpose,
      category: category.value,
    });

    form.reset();
    formContainer.style.display = "none";
    showCards();
  }
});

function showCards() {
  const stack = document.querySelector(".stack");
  stack.innerHTML = ""; // Clear existing cards

  const allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  allTasks.forEach((task) => {
    // Card container
    const card = document.createElement("div");
    card.classList.add("card");

    // Profile Image
    const avatar = document.createElement("img");
    avatar.src = task.image;
    avatar.alt = "Profile Image";
    avatar.classList.add("avatar");

    // Full Name
    const name = document.createElement("h2");
    name.textContent = task.name;

    // Hometown Info
    const hometownInfo = document.createElement("div");
    hometownInfo.classList.add("info");
    const townLabel = document.createElement("span");
    townLabel.textContent = "Home town";
    const townValue = document.createElement("span");
    townValue.textContent = task.town;
    hometownInfo.appendChild(townLabel);
    hometownInfo.appendChild(townValue);

    // Purpose Info
    const purposeInfo = document.createElement("div");
    purposeInfo.classList.add("info");
    const purposeLabel = document.createElement("span");
    purposeLabel.textContent = "Purpose";
    const purposeValue = document.createElement("span");
    purposeValue.textContent = task.purpose;
    purposeInfo.appendChild(purposeLabel);
    purposeInfo.appendChild(purposeValue);

    // Buttons (Call + Message)
    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const callBtn = document.createElement("button");
    callBtn.classList.add("call");
    callBtn.innerHTML = '<i class="ri-phone-line"></i> Call';

    const msgBtn = document.createElement("button");
    msgBtn.classList.add("msg");
    msgBtn.textContent = "Message";

    buttons.appendChild(callBtn);
    buttons.appendChild(msgBtn);

    // Assemble the card
    card.appendChild(avatar);
    card.appendChild(name);
    card.appendChild(hometownInfo);
    card.appendChild(purposeInfo);
    card.appendChild(buttons);

    // Append to stack
    stack.appendChild(card);
  });
  updateStack();
}

// Call on load
showCards();

function updateStack() {
  const cards = document.querySelectorAll(".stack .card");

  cards.forEach((card, i) => {
    card.style.zIndex = cards.length - i;
    card.style.transform = `translateY(${i * 10}px) scale(${1 - i * 0.02})`;
    card.style.opacity = `${1 - i * 0.1}`;
  });
}

upBtn.addEventListener("click", function() {
    let lastChild = stack.lastElementChild;
    if(lastChild) {
        stack.insertBefore(lastChild, stack.firstElementChild);
        // Update 
        updateStack();
    }
});

downBtn.addEventListener("click", function() {
    let firstChild = stack.firstElementChild;
    if(firstChild) {
        stack.appendChild(firstChild);
        // Update 
        updateStack();
    }
});










// Sheriyans code
// // ALL VARIABLES AND DOC SELECTIONS

// let addNote = document.querySelector("#add-note");
// let formContainer = document.querySelector(".form-container");
// let closeForm = document.querySelector(".closeForm");

// const stack = document.querySelector(".stack");
// const upBtn = document.querySelector("#upBtn");
// const downBtn = document.querySelector("#downBtn");

// const form = document.querySelector("form");

// const imageUrlInput = form.querySelector(
//   "input[placeholder='https://example.com/photo.jpg']"
// );
// const fullNameInput = form.querySelector(
//   "input[placeholder='Enter full name']"
// );
// const homeTownInput = form.querySelector(
//   "input[placeholder='Enter home town']"
// );
// const purposeInput = form.querySelector(
//   "input[placeholder='e.g., Quick appointment note']"
// );

// const categoryRadios = form.querySelectorAll("input[name='category']");

// const submitButton = form.querySelector(".submit-btn");

// // CODE STARTS HERE

// function saveToLocalStorage(obj) {
//   if (localStorage.getItem("tasks") === null) {
//     let oldTasks = [];
//     oldTasks.push(obj);
//     localStorage.setItem("tasks", JSON.stringify(oldTasks));
//   } else {
//     let oldTasks = localStorage.getItem("tasks");
//     oldTasks = JSON.parse(oldTasks);
//     oldTasks.push(obj);
//     localStorage.setItem("tasks", JSON.stringify(oldTasks));
//   }
// }

// addNote.addEventListener("click", function () {
//   formContainer.style.display = "initial";
// });

// closeForm.addEventListener("click", function () {
//   formContainer.style.display = "none";
// });

// form.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   const imageUrl = imageUrlInput.value.trim();
//   const fullName = fullNameInput.value.trim();
//   const homeTown = homeTownInput.value.trim();
//   const purpose = purposeInput.value.trim();

//   let selected = false;
//   categoryRadios.forEach(function (cat) {
//     if (cat.checked) {
//       selected = cat.value;
//     }
//   });

//   if (imageUrl === "") {
//     alert("Please enter an Image URL.");
//     return;
//   }

//   if (fullName === "") {
//     alert("Please enter your Full Name.");
//     return;
//   }

//   if (homeTown === "") {
//     alert("Please enter your Home Town.");
//     return;
//   }

//   if (purpose === "") {
//     alert("Please enter the Purpose.");
//     return;
//   }

//   if (!selected) {
//     alert("Please select a category");
//     return;
//   }

//   saveToLocalStorage({
//     imageUrl,
//     fullName,
//     purpose,
//     homeTown,
//     selected,
//   });

//   form.reset();
//   formContainer.style.display = "none";
//   showCards();
// });

// function showCards() {
//   stack.innerHTML = "";

//   let allTasks = JSON.parse(localStorage.getItem("tasks"));

//   allTasks.forEach(function (task) {
//     // Create card container
//     const card = document.createElement("div");
//     card.classList.add("card");

//     // Avatar image
//     const avatar = document.createElement("img");
//     avatar.src = task.imageUrl;
//     avatar.alt = "profile";
//     avatar.classList.add("avatar");
//     card.appendChild(avatar);

//     // Name
//     const name = document.createElement("h2");
//     name.textContent = task.fullName;
//     card.appendChild(name);

//     // Info: Home town
//     const hometownInfo = document.createElement("div");
//     hometownInfo.classList.add("info");

//     const hometownLabel = document.createElement("span");
//     hometownLabel.textContent = "Home town";
//     const hometownValue = document.createElement("span");
//     hometownValue.textContent = task.homeTown;

//     hometownInfo.appendChild(hometownLabel);
//     hometownInfo.appendChild(hometownValue);
//     card.appendChild(hometownInfo);

//     // Info: Bookings
//     const bookingsInfo = document.createElement("div");
//     bookingsInfo.classList.add("info");

//     const bookingsLabel = document.createElement("span");
//     bookingsLabel.textContent = "Purpose";
//     const bookingsValue = document.createElement("span");
//     bookingsValue.textContent = task.purpose;

//     bookingsInfo.appendChild(bookingsLabel);
//     bookingsInfo.appendChild(bookingsValue);
//     card.appendChild(bookingsInfo);

//     // Buttons container
//     const buttonsDiv = document.createElement("div");
//     buttonsDiv.classList.add("buttons");

//     // Call button
//     const callBtn = document.createElement("button");
//     callBtn.classList.add("call");
//     callBtn.innerHTML = '<i class="ri-phone-line"></i> Call';

//     // Message button
//     const msgBtn = document.createElement("button");
//     msgBtn.classList.add("msg");
//     msgBtn.textContent = "Message";

//     // Append buttons
//     buttonsDiv.appendChild(callBtn);
//     buttonsDiv.appendChild(msgBtn);

//     // Append buttonsDiv to card
//     card.appendChild(buttonsDiv);

//     // Finally, add the card to the DOM (for example, inside a container)
//     document.querySelector(".stack").appendChild(card); // or any container of your choice
//   });
// }
// showCards();

// function updateStack() {
//   const cards = document.querySelectorAll(".stack .card");

//   for (let i = 0; i < 3; i++) {
//     card.style.zIndex = 3 - i;
//     card.style.transform = `translateY(${i * 10}px) scale(${1 - i * 0.02})`;
//     card.style.opacity = `${1 - i * 0.02}`;
//   }
// }

// upBtn.addEventListener("click", function () {
//   let lastChild = stack.lastElementChild;
//   if (lastChild) {
//     stack.insertBefore(lastChild, stack.firstElementChild);
//     // update
//     updateStack();
//   }
// });
// downBtn.addEventListener("click", function () {
//   const firstChild = stack.firstElementChild;
//   if (firstChild) {
//     stack.appendChild(firstChild);
//     // update
//     updateStack();
//   }
// });