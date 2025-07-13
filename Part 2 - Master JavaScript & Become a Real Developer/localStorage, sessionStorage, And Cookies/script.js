// localStorage → aapke browser ke andar data store karna jo ki browser band hone par bhi delete nahi hoga
// isko humlog browser ka database samjh sakte hai

// sessionstorage →> ye aapka data temporarily store karta hai matlab ki tab band hua aur data gaya

// cookies → ye bhi data store karta hai and aapka data browser ke cookies naam ki property mein save hota hai and ye cookie concept kam data ya light data ke liye hota (in KBs)


// localStorage:
// store kaise kare - setItem
// data fetch kaise kare -  getItem
// remove kaise kare - removeItem
// update kaise kare - setItem - agar data exist nhi karta toh bana deta hai , and agar already exist karta hai so usee over-write kar deta hai

// localStorage.setItem("name", "shyam");  // store/save data
// let val = localStorage.getItem("name"); // get/fetch data
// localStorage.removeItem("name");  // remove data
// localStorage.setItem("name", "shyamji");  // update data


// sessionStorage:
// sessionStorage.clear();  // clears everything 
// all commansds simmilar to local storage commands


// cookies:
// cookies
// browser mein chhota data store karne ke liye cookies ka istemaal hota hai
// cookies ~4kb
// localstorage sessionStorage - ~5Mb
// cookies mein jo bhi data store karoge wo data page reload par automatically server par jaavega

// document.cookie = "shyam@test.com";
// document.cookie = "age=26";


// local storage only stores values in the form of strings , if we try to store any different type of value in it then it might not store it.
// localStorage.setItem("friend", ["akash", "sumit", "amit"]);
// localStorage.setItem("friends", {one: "akash", two: "sumit"});

// NOTE :- local storage mai array, objects wgerah store nahi kar saktey hai, isliye unhe string bana ke store karte hai.
// jab local storage se data wapas nikalte hai tab string milta hai kyuki humne string save kiya tha 
// string se usee us ke normal form mai laane ke liye usse JSON.parse(); kar dete hai

// JSON
localStorage.setItem("freinds", JSON.stringify(["akash","harsh","amit"]));
// localStorage.getItem("freinds");     // string data milega
// JSON.parse('["akash","harsh","amit"]');  // original data milega
let fr = JSON.parse(localStorage.getItem("freinds"));
console.log(fr);