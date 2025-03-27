const DAYS =6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

/*
Write a for loop that will iterate through the studentReport 
array and print to the console the current array value if it is below 30.
*/

// for = A for loop repeats until a specified condition evaluates to false

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}


/*
Repeat the previous programming snippet by using a while loop.
*/ 

// while = The while loop loops through a block of code as long as a specified condition is true.

let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

/* Repeat the previous programming snippet by using a forEach loop. */
// forEach = The forEach() method calls a function once for each element in an array, in order.

studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
}

/* Repeat the previous programming snippet by using a for...in loop. */
// for...in = The for...in statement iterates over all non-Symbol, enumerable properties of an object.

for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}


/* Use any type of repetition (looping) statement to dynamically produce the day names
 (Monday, Tuesday, Wednesday, etc.) of the next number of DAYS from today's date. */

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
let startDay = today.getDay(); // Get the index of today's day

function generateDays(dayIndex, remainingDays, result = []) {
    if (remainingDays < 0) return result;
    result.push(dayNames[dayIndex % 7]); // Get the corresponding day name
    return generateDays(dayIndex + 1, remainingDays - 1, result);
}

const nextDays = generateDays(startDay, DAYS);
console.log(nextDays);
