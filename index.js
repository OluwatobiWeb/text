"use strict";
const display = document.getElementById("display");
const result = document.querySelector("#display2");

function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
  document.getElementById("display2").value = "";
}

const cal = document.querySelector(".calculate");
cal.addEventListener("click", (e) => {
  if (e.target.textContent.trim() == "=") {
    result.value = eval(display.value.trim());
  }
  result.value = eval(display.value);
});

function erase() {
  display.value = display.value.slice(0, -1);
}
