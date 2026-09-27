// Question 5: Loops, Spread Operator & Pattern Printing

// Part 1: Merge arrays with the spread operator
console.log("=== Question 5a: Spread Operator ===");
const firstNumbers = [1, 2, 3, 4, 5];
const secondNumbers = [6, 7, 8, 9, 10];
const combined = [...firstNumbers, ...secondNumbers];

console.log("First array:   ", firstNumbers);
console.log("Second array:  ", secondNumbers);
console.log("Combined array:", combined);

// Part 2: Star pyramid with a for loop
console.log("\n=== Question 5b: Pattern ===");
const rows = 5;

for (let i = 1; i <= rows; i++) {
  const leadingSpaces = " ".repeat((rows - i) * 3);
  const stars = Array(i).fill("*").join("    ");
  console.log(leadingSpaces + stars);
}

// Part 3: Countdown with a while loop
console.log("\n=== Question 5c: While Loop Countdown ===");
let count = 10;

while (count >= 1) {
  console.log(count);
  count--;
}
