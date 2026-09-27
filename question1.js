// Question 1: Control Flow & Conditional Logic

function gradeStudent(score) {
  if (typeof score !== "number" || score < 0 || score > 100) {
    console.log(`Invalid score: ${score}. Score must be between 0 and 100.`);
    return;
  }

  let grade;

  // Math.floor(score / 10) turns 0-100 into 0-10, so each case covers a band of scores
  switch (Math.floor(score / 10)) {
    case 10:
    case 9:
      grade = "A";
      break;
    case 8:
      grade = "B";
      break;
    case 7:
      grade = "C";
      break;
    case 6:
      grade = "D";
      break;
    default:
      grade = "F";
  }

  // Ternary operator to decide pass or fail
  const result = score >= 60 ? "Passed" : "Failed";

  console.log(`Score: ${score} | Grade: ${grade} | Result: ${result}`);
}

console.log("=== Question 1: Grades ===");
let score = 85;
gradeStudent(score);

// Extra tests covering every grade band and the edge cases
[100, 90, 89, 75, 60, 59, 0, 105].forEach(gradeStudent);

module.exports = { gradeStudent };
