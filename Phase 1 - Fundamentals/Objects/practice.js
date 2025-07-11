// Create an object for a student with name, age, and isEnrolled.
let obj = {
    name: "Shyamji",
    age: 20,
    isEnrolled: true,
};

// Can an object key be a number or boolean? Try this
const obj = {
    true: "yes",
    42: "answer",
};

console.log(obj[true]);  // yes
console.log(obj[42]);    // yes

// Access the value of "first-name" from this object:
const user = {
    "first-name": "Shyam",
};

console.log(user["first-name"]);

// Given a dynamic key let key = "age", how will you access user[key]?
let key = "age";
const user = {
    age: 26,
};

console.log(user[key]);

// From the object below, print the latitude:
const locations = {
    city: "Bhopal",
    coordinates: {
        lat: 23.2,
        lng: 77.4,
    },
};

locations.coordinates.lat;
console.log(locations.coordinates.lat); // Output: 23.2
console.log(locations["coordinates"]["lat"]); // Also works (23.2)

// What will happen if coordinates is missing? How can you prevent errors?
locations?.coordinates?.lat

// Destructure the city and lat from the location object above.
let { city } = locations;
let { lat } =  locations.coordinates;

// Destructure the key "first-name" as a variable called firstName.
const user = {
    "first-name": "Shyam",
};

const { "first-name": firstName } = user;
console.log(firstName); // Output: "Shyam"

// Use for-in to log all keys in this object:
const course = {
    title: "JavaScript",
    duration: "4 weeks",
};

for(let key in course) {
    console.log(key);
}

// Use Object.entries() to print all key-value pairs as:
// title: JavaScript
// duration: 4 weeks
const course = {
    title: "JavaScript",
    duration: "4 weeks",
};

Object.entries(course).forEach(function (val) {
    console.log(val[0] + ":" + val[1]);
});

Object.entries(course).forEach(([key, value]) => {       // another method by AI
    console.log(`${key}: ${value}`); 
});

// Deep clone the obj1 safely.
const obj1 = { info: { score: 80 } };
const newObj = JSON.parse(JSON.stringify(obj1)); // Deep clone
newObj.info.score = 100; // Modify the clone

console.log("Original:", obj1.info.score);       // Output: 80 (unchanged)
console.log("Cloned:", newObj.info.score);      // Output: 100

// Rewrite this safely using optional chaining:
const person = {};
console.log(person.profile.name); // Output: (error)
console.log(person?.profile?.name); // Output: undefined (no error)

// Use a variable to dynamically assign a property
const key = "role";
let obj = {
    name: "shyam",
    [key]: "admin",
};