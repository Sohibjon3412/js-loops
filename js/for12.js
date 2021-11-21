let n = 3;
let s = 1;
let aylana = 1;

for (let i = 1.1; aylana <= n; i+=0.1, aylana++) {
  s *= i;
}
console.log(s.toFixed(1));