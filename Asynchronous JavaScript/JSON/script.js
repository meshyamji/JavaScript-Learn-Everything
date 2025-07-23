// .json --> strict
// double quotes (key, value)
// string, number, null, boolean, object, array
// function, date, undefined

// JSON
{
  "name": "Shyam",
  "age": 20,
  "isStudent": true
}

// This is pure JSON, not wrapped in a JavaScript string or variable.
// If you want it inside JavaScript as a string, use:
const jsonUser = JSON.stringify({
  name: "Shyam",
  age: 20,
  isStudent: true
});

console.log(jsonUser);

// JSON version (as a string) in JavaScript
const jsonUser = `{
  "name": "Shyam",
  "age": 20,
  "isStudent": true
}`;

// JavaScript Object
const user = {
  name: "Shyam",
  age: 20,
  isStudent: true
};

// Convert Between JS and JSON
// Convert object to JSON
const jsonData = JSON.stringify(user);

// Convert JSON to object
const jsObject = JSON.parse(jsonData);

// Use JSON.stringify() and JSON.parse():

// ☑️ stringify() → Object to JSON string

// ☑️ parse() → JSON string to Object