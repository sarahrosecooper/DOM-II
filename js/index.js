// Your code goes here
const welcome = document.querySelector("h2");
welcome.addEventListener("mouseenter", () => {
  welcome.style.color = "goldenrod";
});

const headerTwoLets = document.getElementById("letsGo");
headerTwoLets.addEventListener("mouseenter", () => {
  headerTwoLets.style.visibility = "hidden";
});

headerTwoLets.addEventListener("mouseleave", function () {
  setTimeout(visibleHeader, 550);
});

function visibleHeader() {
  headerTwoLets.style.visibility = "visible";
}

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  wheelMove.style.transform = `scale(${scale})`;
}

let scale = 1;
const wheelMove = document.querySelector(".wheel");
wheelMove.onwheel = zoom;
