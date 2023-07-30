function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
console.log(btn);

btn.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.querySelector("span").textContent = color;
  document.querySelector("body").style.backgroundColor = color;
});
