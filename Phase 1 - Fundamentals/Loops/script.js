// repeat karne ko loop kahte hai
// for while do-while forin forof foreach

// kaha se jaana hai →> kaha tak jaana hai →> kaise jaana hai
// for
// kaha se jaana hai →> kab rukna hai -> kaise jaana hai
// while

// for
for(start; end; change){

}

// while
start;
while(end){
    // code
    change;
}

// do while
do{

}
while(end)

// break - it terminates the loop
for(let i = 1; i<201; i++){
    console. log (i);
    if(i === 32){
       break;
    }
}

// conitnue - it skips the code after it is hit to the next iteration
for(let i = 1; i<201; i++){
    if (i === 32){
        continue;
    }
    console.log(i);
}

// ------------------------------------------------------------------------

// Q. Print the multiplication table of 5 (i.e., 5 × 1 = 5 ... 5 × 10 = 50)
for (let i = 1; i < 11; i++) {
    console.log ('5 * ${i} = ${5 * i}');
}

// Q8. Ask the user for a number and print whether each number from 1 to that number is even or odd.
// (e-g., "1 is odd", "2 is even", ..."
let val = prompt("give a number");
for (let i = 1; i <= val; i++) {
    if (i % 2 === 0) {
    console.log(`${i} is even`);
    } else {
    console.log(`${i} is odd`);
    }
}

// Q. Count how many numbers between 1 to 100 are divisible by both 3 and 5.
for (let i = 1; i < 101; i++) {
    if (1% 3 == 0 && 1 % 5 === 0) {
    console.log(i);
    }
}

// Q: Stop at First Multiple of 7
// Write a loop from 1 to 100 that:
//. Prints each number
//• Stops completely when it finds the first number divisible by 7
for (let i = 1; i < 101; i++) {
    console. log (i);

    if (1% 7 === 0) {
    break;
    }
}

// ? Q: Skip Multiples of 3
// Write a loop from 1 to 20 that:
// Skips numbers divisible by 3
// Prints all others

// Hint - Use continue
// Expected output:
// 1 2 4 5 7 8 10 11 • • • (no 3, 6, 9, etc.)
for (let i = 1; i < 21; i++) {
    if (i% 3 === 0) continue;
    console. log (i);
}

// Q3: Print First 5 Odd Numbers Only
// • Write a loop from 1 to 100 that:
// • Prints only 5 odd numbers
// • Then stops the loop
//  Use both if, continue, and a counter + break
// Expected output: 1 3 5 7 9
let count = 0;
for (let i = 1; i < 101; i++) {
    if (i % 2 === 1) {
    count++;
    console. log (i);
}
if (count === 5) break;
}