let n = 335;
let toq1;
let toq2;
let toq3;

let b = n % 10;
let c = (n - b) % 100;
let q = c % 10;
let w = (c - q) / 10;
let x = (n - c - b) / 100;
// let y = b + w + x;

if (n >= 1000) {
  console.log("Faqat mingdan kichik son kiriting !!!");
} else if (b % 2 != 0){
  toq1 = b;
} else if (w % 2 != 0) {
  toq2 = w;
} else if (x % 2 != 0) {
  toq3 = x;
}
console.log(toq1+toq2+toq3);