// Question 2: Type Conversion, Truthy & Falsy Values

console.log("=== Question 2: Type Conversion ===");

const input = "25";
const converted = Number(input);

console.log(`Original: "${input}" (type: ${typeof input})`);
console.log(`Converted: ${converted} (type: ${typeof converted})`);
console.log(`Converted + 5 = ${converted + 5}`); // proves it's a real number now

console.log("\n=== Question 2: Truthy & Falsy ===");

const testValues = [0, "", "hello", null, undefined, NaN];
const truthy = [];
const falsy = [];

for (const value of testValues) {
  // JSON.stringify shows "" and "hello" with quotes; String() handles undefined/NaN
  const label = typeof value === "string" ? JSON.stringify(value) : String(value);

  if (value) {
    console.log(`${label} is truthy`);
    truthy.push(label);
  } else {
    console.log(`${label} is falsy`);
    falsy.push(label);
  }
}

console.log(`\nTruthy values: ${truthy.join(", ")}`);
console.log(`Falsy values: ${falsy.join(", ")}`);
