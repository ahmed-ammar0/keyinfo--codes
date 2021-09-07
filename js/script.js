"use strict";

let whichBtn = document.querySelector(".which-btn");
let firstAdvice = document.querySelector(".advice");
let eventKeyElem = document.querySelector(".event-key");
let eventLocationElem = document.querySelector(".event-location");
let eventWhichElem = document.querySelector(".event-which");
let eventCodeElem = document.querySelector(".event-code");
let allInfo = document.querySelector(".row");
let itemChildren = document.querySelectorAll(".item div");

document.addEventListener("keyup", function (e) {
  whichBtn.classList.replace("d-none", "d-block");
  firstAdvice.classList.add("d-none");
  allInfo.classList.replace("d-none", "d-flex");
  whichBtn.textContent = e.keyCode;
  eventKeyElem.textContent = e.key;
  eventLocationElem.textContent = e.location;
  eventWhichElem.textContent = e.which;
  eventCodeElem.textContent = e.code;
});

itemChildren.forEach((child) => {
  child.addEventListener("click", function (e) {
    document.execCommand("copy");
    let toolTip = document.createElement("p");
    toolTip.textContent = "Text Copied";
    document.body.appendChild(toolTip);
    toolTip.classList.add("my-tooltip");
    toolTip.style.left = `${e.clientX + 20}px`;
    toolTip.style.top = `${e.clientY}px`;
    setTimeout(() => toolTip.classList.add("d-none"), 350);
  });
  child.addEventListener("copy", function (event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", child.textContent);
    }
  });
});
