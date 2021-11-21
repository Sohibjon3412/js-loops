let c = 28;

if (c < 0) {
  console.log("Freezing");
} else if (c >= 1 && c <= 10) {
  console.log("Very Cold");
} else if (c >= 11 && c <= 20) {
  console.log("Cold");
} else if (c >= 21 && c <= 30) {
  console.log("Normal");
} else if (c >= 31 && c <= 40) {
  console.log("Hot");
} else if (c > 40) {
  console.log("Veru Hot");
}