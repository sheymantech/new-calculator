"use strict";

const btnSwitch = document.querySelector(".switch-cont span");
const input = document.getElementById("input");
const btnSwitchCont = document.querySelector(".switch-cont ");
const bodyText = document.querySelector("body");
const btnWrapper = document.querySelector(".btn-wrapper");
const toggleSwitch = document.querySelectorAll(".switch-btn");
const btnEquel = document.querySelector(".btn-equal button");
const btnReset = document.querySelector(".btn-reset button");
const btn = document.querySelectorAll("button");

let stringCalc = "";

btnSwitch.addEventListener("click", function (e) {
  if (e.target.textContent === "2") {
    bodyText.style.backgroundColor = "hsl(0, 0%, 90%)";
    bodyText.style.color = "black";
    input.style.backgroundColor = "hsl(0, 0%, 93%)";
    input.style.color = "black";
    btnWrapper.style.backgroundColor = "hsl(0, 5%, 81%)";
    btnReset.style.backgroundColor = "hsl(224, 28%, 35%)";
    btnEquel.style.backgroundColor = "hsl(6, 70%, 34%);";
    btnSwitch.style.color = "white";
    toggleCheck(e.target);
  } else if (e.target.textContent === "3") {
    bodyText.style.backgroundColor = "hsl(268, 75%, 9%)";
    bodyText.style.color = "hsl(52, 100%, 62%)";
    input.style.color = "white";
    input.style.backgroundColor = "hsl(268, 71%, 12%)";
    btnWrapper.style.backgroundColor = "hsl(268, 71%, 12%)";
    btnReset.style.backgroundColor = "hsl(281, 89%, 26%)";
    btnEquel.style.backgroundColor = "hsl(176, 100%, 44%)";

    toggleCheck(e.target);
  } else {
    bodyText.style.backgroundColor = "hsl(222, 26%, 31%)";
    bodyText.style.color = "white";
    input.style.color = "white";
    input.style.backgroundColor = "hsl(224, 36%, 15%)";
    btnWrapper.style.backgroundColor = "hsl(224, 36%, 15%)";
    btnReset.style.backgroundColor = "hsl(224, 28%, 35%)";
    btnEquel.style.backgroundColor = "hsl(6, 70%, 34%);";
    toggleCheck(e.target);
  }
});

const toggleCheck = function (target) {
  toggleSwitch.forEach((element) => {
    element.classList.remove("active");
    if (target.textContent === element.dataset.toggle) {
      element.classList.add("active");
    }
  });
};

btn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (e.target.innerText === "=") {
      stringCalc = String(eval(stringCalc));
      input.value = stringCalc;
    } else if (e.target.innerText === "DEL") {
      stringCalc = stringCalc.substring(0, stringCalc.length - 1);
      input.value = stringCalc;
    } else if (e.target.innerText === "reset") {
      stringCalc = "";
      input.value = stringCalc;
    } else {
      stringCalc += e.target.innerText;
      input.value = stringCalc;
    }
  });
});
console.log("sheyman");
