function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBtn = document.querySelector(".change-color");
const elColor = document.querySelector(".color");
const elBody  = document.querySelector("body");

colorBtn.addEventListener("click", () =>
{
  elColor.textContent = getRandomHexColor();
  elBody.style.backgroundColor = elColor.textContent;

})