'use srtict';

/* const hamburger = 5;
const fries = null;

if (hamburger && fries) {
    console.log("Im fool");
}  */

/* const hamburger = 3;
const fries = 1;
const cola = 1;

console.log(hamburger === 3 && cola && fries);

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'ksdgfskd');

if (hamburger === 3 && cola === 1 && fries) {
    console.log("Everybody are not hungry");
} else {
    console.log('We are go home');
} */

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger  ===3 && cola ===2 || fries ===3 && nuggets) {
    console.log("Everybody are not hungry");
} else {
    console.log('We are go home');
}

console.log(hamburger  ===3 && cola ===2 || fries ===3 && nuggets);

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || mariaReport || samReport);

console.log(!0);