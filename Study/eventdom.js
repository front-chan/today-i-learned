const inputOne = document.getElementById("input-1");
const inputTwo = document.querySelector("#input-2");
const inputThree = document.querySelector("#input-3");
const mouseEventBox = document.getElementById("mouse-event-box");
const clickSpan = document.querySelector(".click");
const mouseOver = document.querySelector(".mouse-over");
const contextMenu = document.querySelector(".context-menu");

inputOne.addEventListener("keydown", () => {
  console.dir(inputOne);
  console.log(inputOne.value);
});
inputTwo.addEventListener("keypress", () => {
  console.log(inputTwo.value);
});
inputThree.addEventListener("keyup", () => {
  console.log(inputThree.value);
});

document.body.onload = addElement;

function addElement() {
  let span1 = document.createElement("span");
  let span2 = document.createElement("span");
  let h3 = document.createElement("h3");
  // span1.innerHTML = "<span>MouseLeave</span>";
  span1.textContent = "<span>MouseLeave</span>";
  span2.textContent = "contextmenu";
  // h3.innerHTML = "<span class='context-menu2'>contextmenu2</span>";
  span2.classList.add("context-menu-2");
  // console.dir(span2);
  mouseEventBox.append(span1);
  mouseEventBox.append(span2);
  // mouseEventBox.append(h3);
}

mouseEventBox.style.display = "flex";

function clickSpanHandler() {
  clickSpan.innerHTML = "<h4>Hello</h4>";
}

clickSpan.addEventListener("click", clickSpanHandler);

mouseOver.addEventListener("mouseover", () => {
  console.log("Hello!!!!!");
});

contextMenu.addEventListener("contextmenu", () => {
  alert("복제 금지!!!!!!");
});

// Error
// console.log(document.querySelector(".click"));
const contextMenu2 = document.querySelector(".context-menu-2");
const h3 = mouseEventBox.lastChild;
console.log(mouseEventBox);
console.log(h3);
const lastChildSpan = document.querySelector("span:last-child");
console.dir(lastChildSpan);
console.dir(contextMenu2);

lastChildSpan.addEventListener("contextmenu", () => {
  alert("복제 금지!!!!!!");
});
