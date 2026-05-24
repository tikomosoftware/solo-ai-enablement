const form = document.querySelector("#entry-form");
const nameInput = document.querySelector("#name");
const message = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = `${nameInput.value}さんの参加登録を受け付けました。`;
});

