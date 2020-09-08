// 1.) mouseover

// make welcome to the fun bus goldenrod upon hover (mouseover)

const welcome = document.querySelector("h2");
welcome.addEventListener("mouseover", () => {
  welcome.style.color = "goldenrod";
});

// make lets go disappear

const letsGo = document.getElementById("letsGo");
letsGo.addEventListener("mouseenter", () => {
  letsGo.style.visibility = "hidden";
});

// 2.) mouseleave

// make reappear after 550 milliseconds
letsGo.addEventListener("mouseleave", function () {
  setTimeout(visibleHeader, 550);
});

// to make visible
function visibleHeader() {
  letsGo.style.visibility = "visible";
}

// 4.) dblclick

// change destination pink upon double click

const pDestination = document.querySelector(".content-destination p");
pDestination.addEventListener("dblclick", () => {
  pDestination.style.color = "pink";
});

// 5.) wheel

// lets go image: change size upon zooming

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // apply scale transform
  wheelMove.style.transform = `scale(${scale})`;
}

// creating wheel function

let scale = 1;
const wheelMove = document.querySelector("#wheel");
wheelMove.onwheel = zoom;

// 6.) mouseover

// show date when mouseover middle button

const date = document.querySelectorAll(".btn");
date.forEach((buttons) => {
  buttons.addEventListener("mousedown", displayDate);
});

function displayDate() {
  document.getElementById("emptySpace").innerHTML = Date();
}

// 7.)

window.addEventListener("load", (event) => {
  alert("Enjoy the ride!");
});
