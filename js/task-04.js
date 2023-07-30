let counterValue = Number(document.querySelector("#value").textContent);

const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');

decrBtn.addEventListener("click", () => {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
});

incrBtn.addEventListener("click", () => {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
});
