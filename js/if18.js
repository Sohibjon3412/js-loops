let a = 5;
let b = 6;
let c = 9;

if (a == b && a == c) {
  console.log("Ular teng");
} else if (a >= b && a >= c) {
  console.log(`Eng katta son ${a}`);
} else if (b >= a && b >= c) {
  console.log(`Eng katta son ${b}`);
} else {
  console.log(`Eng katta son ${c}`);
}