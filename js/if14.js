let a = 27;
let t = true;
let f = false;

let b = a % 10;
let c = Math.trunc(a / 10);
let x = 10 * b + c;

if (x <= a) {
  console.log(t);
} else {
  console.log(f);
}