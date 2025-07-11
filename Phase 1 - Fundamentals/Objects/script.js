// creation of a object
let obj = {
    name: "Shyamji",      // key-value structure / pair
    age: 19,
    food: "paneer", 
};

obj.name;   // acessing an object
obj['name']; // acessing an object

let aa = "name";
obj.aa;            // iska matlab hota hai ki . ke baad jo jo likha hai use dhundo obj mai, ye use convert nhi karega thats why its (wrong way)
obj[aa];         // (correct way) ye convert kar deta, jis se aa mai "name" ajayega and then obj se name access ho payega 

// deep object / nesting and deep access
const user = {
    name: "Shyam",
    address: {
        city: "Noida",
        pin: 462001,
        location: {
            lat: 23.2,
            lng: 77.4,
        },
    },
};
user.address.city.location.lng;
let {lat,lng} = user.address.city.location;   // short way to access
lng;    // direct access

// looping in object
// for-in
let obj = {
    name: "shyam",
    age: 20,
    email: "test@test.com",
};
for (let key in obj) {
    console.log(key);      // we only get key access and not the value of the key
    console.log(obj[key]); // we get to the value of the key
    console.log(key, obj[key]); // to get key and value of the key together
}

// Object.keys and Object.entries  
let obj = {
    name: "shyam",
    age: 20,
    email: "test@test.com",
};
Object.keys(obj);     // creates a array of keys of the object
Object.entries(obj);  // cerates an array of arrays

// copying objects : spread, Object.assign, deep clone
let obj = {
    name: "shyam",
    age: 20,
    email: "test@test.com",
};
let obj2 = {...obj};     // spread operator used to copy an array
let obj3 = Object.assign({}, obj);   // works same as spread , vey less often used
let obj3 = Object.assign({ price: Infinity }, obj);   // can be used to assign properties to an object

// deep clone - good way of cloning to avoid errors
let obj = {
    name: "shyam",
    age: 26,
    email: "test@test.com",
    address: {                  // nested objects - pass refrence instead of a real copy in spread operator copy
        city: "Noida",
    },
};
let obj4 = JSON.parse(JSON.stringify(obj));

// Optional chaining, computed properties
// optional chaining ?
let obj = {
    name: "shyam",
    age: 26,
    email: "test@test.com",
    address: {               
        city: "Noida",
    },
};
obj?.address?.city

// computed properties
let role = "admin";
let obj = {
    name: "shyam",
    age: 26,
    email: "test@test.com",
    address: {
        city: "Noida",
    },
    [role]: "shyam"
};