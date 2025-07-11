// Create an array with 3 fruits and print the second fruit.
let fruit = ["apple", 'guava', "banana"];
fruit[1];

// Add "Mango" at the end and "Pineapple" at the beginning of this array:
let fruits = ["Apple", "Banana"];
fruits.push("Mango");
fruits.unshift("Pineapple");

// Replace "Banana" with "Kiwi" in the array above.
let fruits = ["Apple", "Banana"];
fruits.pop();
fruits-push("Kiwi");

// Remove the last item from this array using a method:
let numbers = [1, 2, 3, 4];
numbers.pop();

// Insert "Red" and "Blue" at index 1 in this array:
let colors = ["Green", "Yellow"];
colors.splice(1, 0, "Red", "Blue");

// Extract only the middle 3 elements from this array
let items = [1, 2, 3, 4, 5, 6];
let newarr = items.slice(1, 4);
console.log(newarr);

// Sort this array alphabetically and then reverse it:
let names = ["Zara", "Arjun", "Mira", "Bhavya"];
names.sort().reverse();

// Use map() to square each number:
let arr = [1, 2, 3, 4];
let newarr = arr.map(function (val) {
    return val * val;
});

// Use • filter() to keep numbers greater than 10:
let arr = [15, 12, 8, 20, 3];
let newarr = arr.filter((val) => {
    return val > 10;
});

// Use reduce() to find the sum of this array:
let arr = [10, 20, 30];
let sum = arr.reduce(function (acc, val) {
    return acc + val;
}, 0);

// Use find() to get the first number less than 10:
let arr = [12, 15, 3, 8, 20];
let ans = arr.find(function (val) {
    return val < 10;
});

// Use some() to check if any student has scored below 35:
let arr = [45, 60, 28, 90];
let ans = arr.some(function (val) {
    return val < 35;
});

// Use every () • to check if all numbers are even:
let arr = [2, 4, 6, 8, 10];
let ans = arr.every(function (val) {
    return val % 2 === 0;
});

// Destructure this array to get firstName and lastName
let fullName = ["Shyamji", "Gupta"];
let [firstName, lastName] = fullName;

// Merge two arrays using spread operator:
let a = [1, 2];
let b = [3, 4];
let c = [...a, ...b];

// Add "India" to the start of this array using spread:
let countries = ["USA", "UK"];
countries = ["India", ...countries];

// Clone this array properly (not by reference):
let arr = [1, 2, 3];
let arr2 = [...arr];

//----------------------------------------------------------------------------

// common confusion
[100, 20, 3].sort(); // [100, 20, 3] → "100", "20", "3" (wrong)
arr.sort((a, b) => a - b);  // ascending sorting  (correct)
