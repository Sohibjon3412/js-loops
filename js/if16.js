let n = 45;

let b = n % 10;
let c = (n - b) % 100;
let q = c % 10;
let w = (c - q) / 10;
let x = (n - c - b) / 100;
let y = b + w + x;

if (n >= 1000) {
  console.log("Faqat mingdan kichik son kiriting !!!");
} else {
  console.log(y);
}