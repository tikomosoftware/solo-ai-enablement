const faqs = [
  {
    question: "パスワードを忘れた場合はどうしますか",
    answer: "サインイン画面の再設定リンクから申請してください。"
  },
  {
    question: "アカウント権限を変更したいです",
    answer: "管理者に依頼してください。"
  },
  {
    question: "利用申請の状況を確認したいです",
    answer: "申請一覧から現在のステータスを確認できます。"
  }
];

const queryInput = document.querySelector("#query");
const results = document.querySelector("#results");

function render(items) {
  results.innerHTML = items.map((item) => `
    <li>
      <p class="question">${item.question}</p>
      <p class="answer">${item.answer}</p>
    </li>
  `).join("");
}

function search(keyword) {
  const value = keyword.trim();
  if (!value) {
    return faqs;
  }
  return faqs.filter((item) => item.question.includes(value));
}

queryInput.addEventListener("input", () => {
  render(search(queryInput.value));
});

render(faqs);

