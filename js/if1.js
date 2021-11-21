let a = 1;
let b = 4;
let c = 2;

if (a == b && a == c && c == b){
  console.log("Ular eng");
} else if (a <= b && a <= c) {
  console.log(a);
} else if (b <= a && b <= c) {
  console.log(b);
} else {
  console.log(c);
}