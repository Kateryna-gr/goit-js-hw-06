const input = document.querySelector("#validation-input");
const length = input.dataset.length;

input.addEventListener("blur", () => {
  console.log(input.value.length);
  if (input.value.length == length) {
    input.style = "border-color: #4caf50;";
    return;
  }
  input.style = "border-color: #f44336;";
});
