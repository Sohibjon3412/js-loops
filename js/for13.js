let n = 3;
let s = 0;
let aylana = 1;

for (let i =1.1, j = 1.2; aylana <= n; i+=0.2, j+=0.2, aylana++) {
  s += i - j;
}
console.log(s.toFixed(1));