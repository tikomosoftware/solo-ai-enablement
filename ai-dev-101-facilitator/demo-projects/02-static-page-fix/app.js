const buttons = document.querySelectorAll("[data-type]");
const selectedType = document.querySelector("#selected-type");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedType.textContent = `選択済み: ${button.dataset.type}`;
  });
});

