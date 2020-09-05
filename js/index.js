// Your code goes here
const welcome = document.querySelector("h2");
welcome.addEventListener("mouseenter", () => {
  welcome.style.color = "goldenrod";
});

const headerTwoLets = document.getElementById("letsGo");
function showLetsGo() {
  document.getElementById("letsGo").style.display = "visible";
}
function hideLetsGo() {
  document.getElementById("letsGo").style.display = "none";
}
function showOrHide() {
  if (document.getElementById("letsGo").style.display == "visible") {
    hideLetsGo();
  } else {
    showLetsGo();
  }
}

headerTwoLets.addEventListener("click", () => {
    if(headerTwoLets.style.visibility === "visible"){
        display: hidden {
            else {
                display: visible
            }
        }
    }
});
