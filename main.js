let body = document.body;
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let answer = document.getElementById("answer");

a.addEventListener("input", function () {
  let s = (a.value + b.value + c.value) / 2;
  let formula = s * (s - a.value) * (s - b.value) * (s - c.value);
  let squareRoot = Math.sqrt(formula);
  answer.value = squareRoot;
});
b.addEventListener("input", function () {
  let s = (a.value + b.value + c.value) / 2;
  let formula = s * (s - a.value) * (s - b.value) * (s - c.value);
  let squareRoot = Math.sqrt(formula);
  answer.value = squareRoot;
});
c.addEventListener("input", function () {
  let s = (a.value + b.value + c.value) / 2;
  let formula = s * (s - a.value) * (s - b.value) * (s - c.value);
  let squareRoot = Math.sqrt(formula);
  answer.value = squareRoot;
});

body.addEventListener("load", function () {
  a.value = "";
  b.value = "";
  c.value = "";
  answer.value = "";
});
