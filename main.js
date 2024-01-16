let body = document.querySelector("body");
let answer = document.querySelector("#answer");
let height = document.querySelector("#height");
let base = document.querySelector("#base");

body.addEventListener("load", function () {
  height.value = "";
  base.value = "";
});

base.addEventListener("input", function () {
  let formula = (height.value * base.value) / 2;
  answer.value = formula;
});

height.addEventListener("input", function () {
  let formula = (height.value * base.value) / 2;
  answer.value = formula;
});
