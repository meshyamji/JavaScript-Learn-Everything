let arr = new Array;
let arr = [];
arr = [10,12,14,16];
arr[2];      // acsess
arr[2] = 18; // modify

let arr = [1,2,3,4,5];
arr.push(700);                 // .____() Method    i.e.  . ke agye agar bracekts() lag jaye so wo ek method hai
arr.pop();      // removes value from the last
arr.shift();    // removes value from the start
arr.unshift(0); // starting mai ek value add karta hai
arr.splice(2,1); // removes value from between , 2 is the index and 1 is the no. of elemnts to be removed
let arr = [1, 2, 3, 4, 5];
let newarr = arr.slice(0, 4);  // slices or extracts the elements from 0th index to 4th index
// slice does not chnages the actual array , it does the changes in the variable
arr.reverse(); // reverses the actual array
let arr = [11, 62, 3, 4, 25];
let sr = arr.sort(function(a, b) {       // sort always accepts a function
    return a-b;    // ascending
    return b-a;    // descending
});


// map, filter, reduce and for each - all of them accepts a function 
// for each
let arr = [11, 62, 3, 4, 25];
arr.forEach(function (val) {
    console.log(val);
});

// map
// map srf tab youse karna hai jab aapko ek naya array banana hai pichhle array ke data ke basis par
// map dikhte hi saath man mein ek blank array bana liya karo
let arr = [11, 62, 3, 4, 25];
let newarr = arr.map(function(val) {
    return 12;
})
// usage - jab bhi aapko aisa koi case dikh jaaye jaha par ek array se naya array banega and wo naya array kuchh values ko rakhega tab map lagega

// filter
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let newarr = arr.filter(function (val) {        // use to filter values
    if (val > 4) return true;
});

// reduce
// ek badey array se ek single value banana , ek badey are ko reduce kardena ek single value mai
let arr = [11, 2, 3, 4, 5, 61];
let ans = arr.reduce(function (accumulator, val) {
    return accumulator + val;
}, 0);


// find
let arr = [
    { id: 1, key: 1 },
    { id: 2, key: 2 },
    { id: 3, key: 1 },
];

let va = arr.find( function (val) {
    return val. key === 1;
});

// some
let arr = [10, 30, 32, 90];
let any = arr.some(function (val) {
    return val > 85;
});

// every
let arr = [10, 30, 32, 90];
let eve = arr.every(function (val) {
    return val > 5;
});

// destructuring
let arr = [1, 2, 3, 4, 51];
let [a, b, , c] = arr;

// spread operator
let arr = [1,2,3,4,5,6, 7,8,9] ;
let arr2 = [...arr];
