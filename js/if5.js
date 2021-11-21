let x = -5;

if (x > 0) {
  x = 2 * Math.sin(x);
} else if (x <= 0) {
  x = (x - 6);
}
console.log(x);