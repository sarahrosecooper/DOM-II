// make welcome to the fun bus goldenrod upon hover (mouseover)

const welcome = document.querySelector("h2");
welcome.addEventListener("mouseover", () => {
  welcome.style.color = "goldenrod";
});

// change destination pink upon double click

const letsGo = document.getElementById("letsGo");
letsGo.addEventListener("mouseenter", () => {
  letsGo.style.visibility = "hidden";
});

// make reappear after 550 milliseconds
letsGo.addEventListener("mouseleave", function () {
  setTimeout(visibleHeader, 550);
});

// to make visible
function visibleHeader() {
  letsGo.style.visibility = "visible";
}

const pDestination = document.querySelector(".content-destination p");
pDestination.addEventListener("dblclick", () => {
  pDestination.style.color = "pink";
});
