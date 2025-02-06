let number = 8;
// A: 90 - 100;
// B: 80 - 89;
// C: 70 - 79;
// D: 60 - 69;
// F: 0 - 59;

if (number >= 90 && number <= 100) {
  console.log("A");
} else if (number >= 80 && number <= 89) {
  console.log("B");
} else if (number >= 70 && number <= 79) {
  console.log("C");
} else if (number >= 60 && number <= 69) {
  console.log("D");
} else if (number >= 0 && number <= 59) {
  console.log("F");
}
