const value = document.getElementById("value");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");

function changeColor() {
  if (value.innerHTML > 0) {
    value.style.color = "green";
  } else if (value.innerHTML < 0) {
    value.style.color = "red";
  }
}

let count = 0;
increaseBtn.addEventListener("click", () => {
  count++;
  value.innerHTML = count;
  changeColor();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  value.innerHTML = count;
  changeColor();
});
