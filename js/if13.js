let price = 17;
let a = true;
let t = true;
let f = false;

if (price >= 20 && a == true) {
  console.log(t);
} else if (price < 20 && a == true) {
  console.log(f);
} else if (price >= 20 && a == false) {
  console.log(f);
} else {
  console.log(f);
}