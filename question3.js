// Question 3: Functions & Logical Operators

function greetingBot(name, isMorning) {
  // || gives a fallback name if an empty string, null or undefined is passed
  const userName = name || "friend";

  // && returns the morning greeting only when isMorning is true;
  // otherwise it returns false, and || falls through to the default greeting
  return (isMorning && `Good morning, ${userName}!`) || `Hello, ${userName}!`;
}

console.log("=== Question 3: greetingBot ===");
console.log(greetingBot("Mariam", true));  // Good morning, Mariam!
console.log(greetingBot("Sipho", false));  // Hello, Sipho!
console.log(greetingBot("Aisha", true));   // Good morning, Aisha!
console.log(greetingBot("", false));       // Hello, friend!
console.log(greetingBot(undefined, true)); // Good morning, friend!

module.exports = { greetingBot };
