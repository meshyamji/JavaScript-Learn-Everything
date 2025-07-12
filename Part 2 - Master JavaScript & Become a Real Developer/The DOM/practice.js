// T1: Select the heading of a page by ID and change its text to "Welcome".
// let heading = document.querySelector("#heading");
// heading.textContent = "Welcome";


// Select all ‹li> elements and print their text using a loop.
// let lis = document.querySelectorAll("li");
// lis.forEach(function (val) {
//     console.log(val.textContent);
// });

// for (let i = 0; i < lis.length; i++) {
//     console.log(lis[i].textContent);
// }


// When should you use textContent instead of innerText?
// textContent (faster and latest) > innerText (slower and old)


// Select a paragraph and replace its content with:
// {
/* <b>Updated</b> by JavaScript */
// }
// let p = document.querySelector("p");
// p.innerHTML = "<b>Updated</b> by JavaScript";


// How do you get the src of an image using JavaScript?
// let img = document.querySelector("img");
// console.log(img.src);
// console.log(img.getAttribute("src"));


// What does setAttribute() do?
// document.querySelector("img").setAttribute("src", "https://images.unsplash.com/photo-1751837184233-b26fa8444e4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");


// Select a link and update its href to point to https://google.com
// let a =  document.querySelector("a");
// a.href = "https://google.com";
// console.log(a.setAttribute("href", "https://google.com"));


// Add a title attribute to a div dynamically.
// let div = document.querySelector("div");
// div.setAttribute("title", "some info");


// Remove the disabled attribute from a button.
// let btn = document.querySelector("button");
// btn.removeAttribute("disabled");


//-----------------------------Dynamic DOM Manipulation--------------------------------

// What does createElement() do? What's returned?
// let h1 = document.createElement("h1");
// console.log(h1);


// Can you remove an element using removeChild()?
// document.querySelector("div").removeChild(elementNode);


// Create a new list item <li>New Task</li> and add it to the end of a <ul>.
// let ul = document.querySelector("ul");
// let li = document.createElement("li");
// li.textContent = "New Task";
// ul.appendChild(li);


// Create a new image element with a placeholder source and add it at the top of a div.
// let img = document.createElement("img");
// img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPAU8rBkD5OxnL5Zmi-mbhJrvyvb09n4Wfw&s");
// img.classList.add("placeholder");
// document.querySelector("div").prepend(img);


// Select the first item in a list and delete it from the DOM.
// let ul = document.querySelector("ul");
// let li = document.querySelector("li");
// ul.removeChild(li);


// How do you change the background color of an element?
// element.style.backgroundColor = "red";


// What's the difference between .classList.add() and .classList. toggle()?


// Add a highlight class to every even item in a list.
let li = document.querySelectorAll("ul li:nth-child(2n)");
console.log(li);
li.forEach(function (elem) {
    elem.classList.add("highlight");
});


// Toggle a class active on a button when clicked (Hint: UseclassList.toqqle()).


// Set the font size of all <p> elements to 18px using .style
let p = document.querySelectorAll("p");
p.forEach(function (ele) {
    ele.style.fontSize = "23px"; 
});
