let a = 1;
let b = 50;
let c = 81;

if (a == b && a == c && c == b){
  console.log("Ular eng");
} else if (a >= b && a <= c || a <= b && a >= c) {
  console.log(a);
} else if (b >= a && b <= c || b <= a && b >= c) {
  console.log(b);
} else if (c >= a && c <= b || c <= a && c >= b){
  console.log(c);
}