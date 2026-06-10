---
marp: true
theme: default
paginate: false
---

<!--
YouTube版スライド。
参照画像の雰囲気に合わせ、明るいオレンジ帯、太い見出し、
丸アイコン、カラフルな情報カードを中心にした見せる構成です。
公式ロゴ画像は使わず、製品名バッジと抽象アイコンで表現します。
-->

<style>
:root {
  /* YouTube slide palette */
  --color-heading: #0b2b55;
  --color-text: #102033;
  --color-primary: #0969da;
  --color-success: #07956f;
  --color-highlight: #ef3f73;
  --color-warm: #ff9300;
  --color-topbar-start: #ff9a00;
  --color-topbar-mid: #ffbd22;
  --color-topbar-end: #ffd84d;
  --color-pill-purple: #8147dd;
  --color-surface: #ffffff;
  --color-page-bottom: #f5fcff;
  --color-soft-blue: #dff5ff;

  --navy: var(--color-heading);
  --blue: var(--color-primary);
  --cyan: var(--color-soft-blue);
  --green: var(--color-success);
  --pink: var(--color-highlight);
  --orange: var(--color-warm);
  --yellow: #ffe45e;
  --ink: var(--color-text);
}

section {
  position: relative;
  overflow: hidden;
  font-family: "Yu Gothic", "Meiryo", sans-serif;
  color: var(--ink);
  background:
    linear-gradient(90deg, var(--color-topbar-start) 0%, var(--color-topbar-mid) 48%, var(--color-topbar-end) 100%) top / 100% 32px no-repeat,
    radial-gradient(circle at 7% 14%, rgba(9, 105, 218, 0.11) 0 3px, transparent 4px),
    radial-gradient(circle at 92% 22%, rgba(239, 63, 115, 0.12) 0 4px, transparent 5px),
    linear-gradient(180deg, #ffffff 0%, #f5fcff 100%);
  padding: 82px 64px 46px;
}

section::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 32px;
  background: linear-gradient(90deg, var(--color-topbar-start) 0%, var(--color-topbar-mid) 48%, var(--color-topbar-end) 100%);
  box-shadow: 0 4px 0 rgba(9, 105, 218, 0.18);
}

section::after {
  content: "";
  position: absolute;
  right: -110px;
  bottom: -120px;
  width: 360px;
  height: 360px;
  border-radius: 999px;
  background: rgba(9, 105, 218, 0.08);
  z-index: 0;
}

section > * {
  position: relative;
  z-index: 1;
}

h1 {
  margin: 0 0 22px;
  color: var(--navy);
  font-size: 56px;
  line-height: 1.08;
  font-weight: 900;
  text-shadow:
    0 4px 0 #ffffff,
    3px 3px 0 rgba(9, 105, 218, 0.18);
}

h2 {
  color: var(--navy);
  font-size: 34px;
  font-weight: 900;
}

p, li {
  font-size: 25px;
  line-height: 1.42;
}

small {
  color: #496178;
}

strong {
  font-weight: 900;
}

.hero {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  min-height: 560px;
}

.hero h1 {
  font-size: 78px;
}

.hero-sub {
  display: inline-block;
  margin-top: 6px;
  background: linear-gradient(90deg, var(--blue), var(--color-pill-purple));
  color: #ffffff;
  border-radius: 999px;
  padding: 10px 26px;
  font-size: 32px;
  font-weight: 900;
}

.hero-copy {
  margin-top: 28px;
  color: var(--navy);
  font-size: 36px;
  font-weight: 900;
}

.big-punch {
  color: var(--pink);
  font-size: 64px;
  font-weight: 900;
  line-height: 1.08;
  text-shadow: 0 4px 0 #fff4c2;
}

.facecam {
  width: 210px;
  height: 210px;
  border-radius: 999px;
  object-fit: cover;
  border: 8px solid #ffffff;
  box-shadow: 0 12px 28px rgba(11, 43, 85, 0.22);
}

.badge-row,
.brand-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 12px 0 18px;
}

.brand {
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  border: 2px solid #c8e7ff;
  background: #ffffff;
  border-radius: 999px;
  padding: 5px 14px;
  color: var(--navy);
  font-size: 18px;
  font-weight: 900;
  box-shadow: 0 3px 0 rgba(9, 105, 218, 0.12);
}

.brand-row.slim {
  margin: 8px 0 14px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-top: 18px;
}

.triple {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 22px;
}

.card {
  position: relative;
  min-height: 132px;
  background: rgba(255, 255, 255, 0.95);
  border: 3px solid #bde6ff;
  border-radius: 18px;
  padding: 20px 22px 18px 86px;
  box-shadow: 0 10px 0 rgba(9, 105, 218, 0.10);
}

.card::before {
  content: attr(data-icon);
  position: absolute;
  left: 20px;
  top: 22px;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 999px;
  background: #e9f7ff;
  color: var(--blue);
  font-size: 26px;
  font-weight: 900;
}

.card.green {
  border-color: #a9e8d5;
}

.card.green::before {
  background: #e9fff7;
  color: var(--green);
}

.card.pink {
  border-color: #ffd0df;
}

.card.pink::before {
  background: #fff0f5;
  color: var(--pink);
}

.card.orange {
  border-color: #ffd59b;
}

.card.orange::before {
  background: #fff5e6;
  color: var(--orange);
}

.card strong {
  display: block;
  color: var(--navy);
  font-size: 27px;
  line-height: 1.2;
  margin-bottom: 8px;
}

.card span {
  display: block;
  color: #334960;
  font-size: 19px;
  line-height: 1.38;
}

.tips-stack {
  display: grid;
  gap: 18px;
}

.tips-stack .card {
  min-height: 100px;
  padding: 14px 18px 13px 74px;
  box-shadow: 0 6px 0 rgba(9, 105, 218, 0.10);
}

.tips-stack .card::before {
  left: 20px;
  top: 18px;
  width: 38px;
  height: 38px;
  font-size: 21px;
}

.tips-stack .card strong {
  font-size: 24px;
}

.tips-stack .card span {
  font-size: 17px;
}

.tips-layout + .note {
  margin-top: 16px;
  padding: 14px 20px;
  font-size: 23px;
}

.wide-card {
  background: #ffffff;
  border: 4px solid #ffd6e2;
  border-radius: 18px;
  padding: 24px 32px;
  box-shadow: 0 10px 0 rgba(239, 63, 115, 0.12);
}

.split,
.split-even {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  align-items: start;
}

.note,
.warning {
  margin-top: 22px;
  border-radius: 18px;
  padding: 18px 24px;
  font-size: 26px;
  font-weight: 900;
}

.note {
  color: var(--navy);
  background: #e7f7ff;
  border: 3px solid #87cfff;
}

.warning {
  color: #7a2900;
  background: #fff4d8;
  border: 3px solid #ffba4a;
}

.mock {
  background: #10213a;
  color: #ffffff;
  border: 4px solid #ffffff;
  border-radius: 18px;
  padding: 22px 24px;
  font-family: "Cascadia Mono", Consolas, monospace;
  font-size: 23px;
  line-height: 1.45;
  box-shadow: 0 10px 0 rgba(9, 105, 218, 0.18);
}

.mock .muted {
  color: #a9c9e8;
}

.mock .ok {
  color: #8ff0b2;
  font-weight: 900;
}

.agenda {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.agenda-item {
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 14px;
  align-items: center;
  background: #ffffff;
  border: 2px solid #bde6ff;
  border-radius: 16px;
  padding: 11px 18px;
  box-shadow: 0 4px 0 rgba(9, 105, 218, 0.10);
}

.agenda-no {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  background: var(--blue);
  color: #ffffff;
  font-size: 24px;
  font-weight: 900;
}

.agenda-item:nth-child(2) .agenda-no,
.agenda-item:nth-child(2) {
  border-color: #a9e8d5;
}

.agenda-item:nth-child(2) .agenda-no {
  background: var(--green);
}

.agenda-item:nth-child(3) .agenda-no,
.agenda-item:nth-child(3) {
  border-color: #ffd0df;
}

.agenda-item:nth-child(3) .agenda-no {
  background: var(--pink);
}

.agenda-item:nth-child(4) .agenda-no,
.agenda-item:nth-child(4) {
  border-color: #ffd59b;
}

.agenda-item:nth-child(4) .agenda-no {
  background: var(--orange);
}

.agenda-title {
  color: var(--navy);
  font-size: 24px;
  font-weight: 900;
  line-height: 1.16;
}

.agenda-detail {
  color: #40566d;
  font-size: 15px;
  line-height: 1.28;
  margin-top: 4px;
}

.guide {
  display: grid;
  grid-template-columns: 1fr 290px;
  gap: 28px;
  align-items: center;
}

.portrait-wrap {
  width: 270px;
  text-align: center;
}

.portrait {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 999px;
  border: 8px solid #ffffff;
  box-shadow: 0 12px 28px rgba(11, 43, 85, 0.20);
}

.company-logo {
  width: 74px;
  display: block;
  margin: -34px auto 8px;
  background: #ffffff;
  padding: 7px;
  border-radius: 14px;
  border: 2px solid #d9eefc;
}

.portrait-comment {
  display: inline-block;
  margin-top: 6px;
  background: #fff4d8;
  border: 3px solid #ffba4a;
  border-radius: 999px;
  padding: 6px 14px;
  color: var(--navy);
  font-size: 18px !important;
  font-weight: 900;
}

.profile-lead {
  margin: 0 0 16px;
  color: var(--pink);
  font-size: 32px;
  font-weight: 900;
  line-height: 1.25;
}

.profile-list {
  margin: 0;
  padding-left: 30px;
}

.profile-list li {
  margin-bottom: 7px;
  font-size: 21px;
}

.profile-personal {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 16px;
}

.profile-personal div {
  background: #ffffff;
  border: 3px solid #bde6ff;
  border-radius: 18px;
  padding: 12px 14px;
}

.profile-personal strong {
  display: block;
  color: var(--navy);
  font-size: 18px;
  margin-bottom: 5px;
}

.profile-personal span {
  display: block;
  color: #40566d;
  font-size: 15px;
  line-height: 1.32;
}

.flow {
  display: grid;
  grid-template-columns: 1fr 42px 1fr 42px 1fr 42px 1fr;
  gap: 9px;
  align-items: center;
  margin-top: 28px;
}

.flow.slim {
  grid-template-columns: 1fr 34px 1fr 34px 1fr 34px 1fr;
  gap: 7px;
  margin-top: 14px;
}

.flow-box,
.project-item {
  background: #ffffff;
  border: 3px solid #bde6ff;
  border-radius: 18px;
  padding: 16px;
  box-shadow: 0 8px 0 rgba(9, 105, 218, 0.10);
}

.flow-box {
  min-height: 126px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.flow.slim .flow-box,
.flow.slim .project-item {
  border-width: 2px;
  border-radius: 16px;
  box-shadow: 0 5px 0 rgba(9, 105, 218, 0.10);
}

.flow.slim .flow-box {
  min-height: 100px;
  padding: 11px;
}

.flow-box strong,
.project-item strong {
  color: var(--navy);
  font-size: 24px;
}

.flow-box span,
.project-item span {
  color: #40566d;
  font-size: 17px;
}

.project-stack {
  display: grid;
  gap: 8px;
}

.flow.slim .project-stack {
  gap: 6px;
}

.project-item {
  padding: 10px 12px;
}

.flow.slim .project-item {
  padding: 6px 10px;
}

.flow.slim .project-item strong {
  font-size: 17px;
}

.flow.slim .project-item span {
  font-size: 14px;
}

.project-item strong {
  display: block;
  font-size: 18px;
}

.project-item span {
  font-size: 15px;
}

.arrow {
  color: var(--orange);
  font-size: 36px;
  font-weight: 900;
  text-align: center;
}

.flow.slim .arrow {
  font-size: 28px;
}

.flow.slim + .note {
  margin-top: 12px;
  padding: 12px 20px;
  font-size: 22px;
}

.next-card {
  margin-top: 36px;
  background: #ffffff;
  border: 4px solid #ffd0df;
  border-radius: 20px;
  padding: 28px 34px;
  box-shadow: 0 12px 0 rgba(239, 63, 115, 0.14);
}

.next-card strong {
  display: block;
  color: var(--pink);
  font-size: 40px;
  margin-bottom: 12px;
}

.next-card span {
  display: block;
  color: var(--navy);
  font-size: 28px;
  line-height: 1.35;
  font-weight: 900;
}

.section-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 520px;
  text-align: center;
}

.section-title h1 {
  margin-bottom: 18px;
  font-size: 74px;
}

.section-title .big-punch {
  align-self: center;
  display: inline-block;
  background: #fff7df;
  border: 3px solid #ffba4a;
  border-radius: 999px;
  padding: 8px 30px;
  color: var(--pink);
  font-size: 42px;
  text-shadow: none;
}
</style>

<div class="hero">
  <div>
    <h1>AIツール<br>最初の地図</h1>
    <div class="hero-sub">チャット・エディタ・エージェントを整理</div>
    <div class="hero-copy">「何から聞けばいい？」に答える入門回</div>
  </div>
</div>

---

# 今日の案内役

<div class="guide">
  <div>
    <p class="profile-lead">現場でAI活用を始めるための、最初の相談役です。</p>
    <ul class="profile-list">
      <li>名前: 佐伯 悠人（通称）</li>
      <li>所属: (株) NEURAMNESIA AI活用支援チーム</li>
      <li>経歴: AI推進室、事業会社のAI活用推進担当などを経験</li>
      <li>普段の仕事: AI開発支援ツールを中心に、AIを使った業務改善や開発支援を提案・サポート</li>
      <li>今日の立ち位置: AIツールを一緒に試すための案内役</li>
      <li>困ったときの相談先: 弊社担当までお気軽にご相談ください</li>
    </ul>
    <div class="profile-personal">
      <div>
        <strong>最近ハマっていること</strong>
        <span>AIにあえて厳しめの質問をして、どこで間違えるか観察すること</span>
      </div>
      <div>
        <strong>好きな仕事</strong>
        <span>現場の「なんとなく面倒」を、少し楽にする仕組みを考えること</span>
      </div>
      <div>
        <strong>大事にしていること</strong>
        <span>すごさを押しつけるより、まず一緒に小さく試すこと</span>
      </div>
    </div>
  </div>
  <div>
    <div class="portrait-wrap">
      <img class="portrait" src="./assets/facilitator-placeholder.png" alt="案内役の写真">
      <div class="portrait-comment">いろいろ試す派</div>
    </div>
  </div>
</div>

---

# 本日の流れ

<div class="agenda">
  <div class="agenda-item">
    <div class="agenda-no">1</div>
    <div>
      <div class="agenda-title">使い始めるときのつまずき</div>
      <div class="agenda-detail">何を聞けばいいか、どこまで信じていいか、なぜ不安になるか</div>
    </div>
  </div>
  <div class="agenda-item">
    <div class="agenda-no">2</div>
    <div>
      <div class="agenda-title">AIの種類と使い方例</div>
      <div class="agenda-detail">AIチャット / AIエディタ / AIエージェント / 複数AIを扱う作業環境</div>
    </div>
  </div>
  <div class="agenda-item">
    <div class="agenda-no">3</div>
    <div>
      <div class="agenda-title">何から始めるのがよいのか</div>
      <div class="agenda-detail">気軽な質問、作業としての依頼、業務改善で使える例</div>
    </div>
  </div>
  <div class="agenda-item">
    <div class="agenda-no">4</div>
    <div>
      <div class="agenda-title">使用時のコツや注意</div>
      <div class="agenda-detail">セッションの区切り方、避けたい操作、AIの返答の確認</div>
    </div>
  </div>
  <div class="agenda-item">
    <div class="agenda-no">5</div>
    <div>
      <div class="agenda-title">次回セッションへ</div>
      <div class="agenda-detail">小さく試して、具体的なAI開発支援ツールの説明会につなげる</div>
    </div>
  </div>
</div>

---

# この回の目的

具体的なAI開発支援ツールを使い始める前に、AIツール全般に共通する基本をそろえます。

<div class="grid">
  <div class="card" data-icon="1">
    <strong>どう使うと役に立つか</strong>
    <span>質問、整理、たたき台、レビュー観点など、最初に試しやすい使い方を知る。</span>
  </div>
  <div class="card pink" data-icon="2">
    <strong>どこに注意するか</strong>
    <span>機密情報、危険な操作、AIの間違い、裏取りの必要性を知る。</span>
  </div>
</div>

<div class="note">今日は特定ツールの操作説明ではなく、AIを業務で使うときの基本姿勢を扱います。</div>

---

# 現場でよくあるつまずき

AIを使い始めるとき、最初につまずきやすい点があります。

<div class="grid">
  <div class="card" data-icon="?">
    <strong>何を聞けばいいか分からない</strong>
    <span>最初からうまいプロンプトを書こうとして止まってしまう。</span>
  </div>
  <div class="card green" data-icon="AI">
    <strong>ツールの違いが分からない</strong>
    <span>チャット、エディタ、エージェントの使い分けが見えにくい。</span>
  </div>
  <div class="card pink" data-icon="!">
    <strong>どこまで信じていいか分からない</strong>
    <span>もっともらしい回答と正しい回答の区別が難しい。</span>
  </div>
  <div class="card orange" data-icon="OK">
    <strong>業務で使うのは少し不安</strong>
    <span>機密情報、権限、危険な操作が気になって踏み出しにくい。</span>
  </div>
</div>

---

<div class="section-title">
  <h1>AIの種類と<br>使い方例</h1>
  <p class="big-punch">まずは分類が分かればOK</p>
</div>

---

# AIツールにも種類がある

同じ「AI」でも、できることや任せてよい範囲は違います。

<div class="grid">
  <div class="card" data-icon="Q">
    <strong>AIチャット</strong>
    <span>質問、文章作成、アイデア出し、説明</span>
  </div>
  <div class="card green" data-icon="<>">
    <strong>AIエディタ/IDE</strong>
    <span>コード補完、小さな修正、コード説明</span>
  </div>
  <div class="card pink" data-icon="GO">
    <strong>AIエージェント</strong>
    <span>作業の相談、リポジトリ調査、編集支援、コマンド実行支援</span>
  </div>
  <div class="card orange" data-icon="+">
    <strong>複数AIを扱う作業環境</strong>
    <span>複数エージェント、ツール連携、長めの作業管理</span>
  </div>
</div>

---

# AIチャットの例

ブラウザやアプリで質問するAIです。

<div class="brand-row">
  <span class="brand">ChatGPT</span>
  <span class="brand">Claude</span>
  <span class="brand">Gemini</span>
  <span class="brand">Microsoft Copilot</span>
</div>

<div class="mock">
<span class="muted">User</span><br>
このエラーの原因候補を教えてください。<br><br>
<span class="muted">AI</span><br>
考えられる原因は3つあります。まずログと設定値を確認しましょう。
</div>

<div class="warning">機密情報や個人情報は、会社のルールに従って扱います。</div>

---

# AIエディタ/IDEの例

エディタの中で、コード補完や小さな修正を支援するAIです。

<div class="brand-row">
  <span class="brand">GitHub Copilot</span>
  <span class="brand">Cursor</span>
  <span class="brand">Kiro</span>
  <span class="brand">Windsurf</span>
</div>

<div class="mock">
<span class="muted">// エディタ上で相談</span><br>
この関数の責務を説明してください。<br>
この処理に対するテストケースを提案してください。
</div>

<div class="note">開いているフォルダやファイルの範囲を意識します。</div>

---

# AIエージェントの例

ファイル調査、編集、コマンド実行の支援まで行うAIです。

<div class="brand-row">
  <span class="brand">Claude Code</span>
  <span class="brand">Codex CLI</span>
  <span class="brand">Codex app</span>
  <span class="brand">Gemini CLI</span>
  <span class="brand">Copilot CLI</span>
  <span class="brand">Kiro</span>
</div>

<div class="split-even">
<div class="mock">
<span class="ok">入口の例</span><br>
CLI型: ターミナルから相談する<br>
アプリ型: 作業画面から依頼する<br>
チャット型: 会話しながら頼む
</div>
<div class="mock">
<span class="ok">頼み方の例</span><br>
このバグの原因を調べてください。<br>
この機能を追加する方針を出してください。<br>
この修正をお願いします。
</div>
</div>

<div class="warning">便利なぶん、起動場所、権限、作業範囲の確認が大切です。</div>

---

# 複数AIを扱う作業環境の例

複数のAI、エージェント、ツールを1つの作業画面から扱う環境も増えています。

<div class="brand-row slim">
  <span class="brand">Codex app</span>
  <span class="brand">Codex web</span>
  <span class="brand">Google Antigravity</span>
  <span class="brand">複数エージェント開発環境</span>
</div>

<div class="flow slim">
  <div class="flow-box">
    <strong>人間</strong>
    <span>やりたいことを伝える</span>
  </div>
  <div class="arrow">→</div>
  <div class="project-stack">
    <div class="project-item">
      <strong>プロジェクトA</strong>
      <span>調査</span>
    </div>
    <div class="project-item">
      <strong>プロジェクトB</strong>
      <span>修正</span>
    </div>
    <div class="project-item">
      <strong>プロジェクトC</strong>
      <span>レビュー</span>
    </div>
  </div>
  <div class="arrow">→</div>
  <div class="flow-box">
    <strong>AIが作業</strong>
    <span>調査、変更、実行を進める</span>
  </div>
  <div class="arrow">→</div>
  <div class="flow-box">
    <strong>人間が確認</strong>
    <span>結果を見て採用するか決める</span>
  </div>
</div>

<div class="note">見るポイントは、作業ごとにプロジェクトを分け、人間が最後に確認することです。</div>

---

<div class="section-title">
  <h1>何から始めるのが<br>よいのか</h1>
  <p class="big-punch">小さな相談からで大丈夫</p>
</div>

---

# まずは気軽に聞いてみる

最初から完璧なプロンプトを書く必要はありません。

<div class="grid">
  <div class="card" data-icon="1">
    <strong>説明してもらう</strong>
    <span>この資料やコードの要点を説明してください。</span>
  </div>
  <div class="card green" data-icon="2">
    <strong>原因候補を出す</strong>
    <span>このエラーや手戻りの原因候補を教えてください。</span>
  </div>
  <div class="card pink" data-icon="3">
    <strong>進め方を整理する</strong>
    <span>この作業の進め方を整理してください。</span>
  </div>
  <div class="card orange" data-icon="4">
    <strong>観点を出す</strong>
    <span>レビューや確認で見るべき観点を出してください。</span>
  </div>
</div>

---

# AIエージェントには作業として頼める

AIエージェントでは、会話だけでなく作業単位で相談できます。

<div class="grid">
  <div class="card" data-icon="+">
    <strong>機能追加</strong>
    <span>この画面に検索機能を追加してください。</span>
  </div>
  <div class="card green" data-icon="!">
    <strong>バグ修正</strong>
    <span>このエラーの原因を調べて、修正案を出してください。</span>
  </div>
  <div class="card pink" data-icon="Aa">
    <strong>小さな変更</strong>
    <span>この文言をユーザー向けに分かりやすく直してください。</span>
  </div>
  <div class="card orange" data-icon="✓">
    <strong>確認作業</strong>
    <span>この差分で注意すべき点をレビューしてください。</span>
  </div>
</div>

<div class="note">最初は「いきなり変更」ではなく、調査と方針確認から始めると安心です。</div>

---

# 業務改善で使える例

開発作業だけでなく、日々の業務の整理にも使えます。

<div class="grid">
  <div class="card" data-icon="M">
    <strong>議事録の整理</strong>
    <span>会議メモを要点、決定事項、宿題に分けて整理する。</span>
  </div>
  <div class="card green" data-icon="T">
    <strong>手順書のたたき台</strong>
    <span>作業メモから、初めての人向けの手順書を作る。</span>
  </div>
  <div class="card pink" data-icon="R">
    <strong>問い合わせ対応の下書き</strong>
    <span>相手に伝わりやすい返信文や確認事項を整理する。</span>
  </div>
  <div class="card orange" data-icon="F">
    <strong>FAQや改善案の整理</strong>
    <span>よくある質問や困りごとから、改善の候補を出す。</span>
  </div>
</div>

<div class="note">最初は、機密情報を含まない小さな作業から試すと始めやすいです。</div>

---

<div class="section-title">
  <h1>使用時のコツや注意</h1>
  <p class="big-punch">便利。でも確認は人間がする</p>
</div>

---

# うまく使うためのコツ

<div class="split tips-layout">
  <div class="tips-stack">
    <div class="card" data-icon="1">
      <strong>1セッションは1目的</strong>
      <span>長くなったら新しいセッションで相談し直す。</span>
    </div>
    <div class="card green" data-icon="2">
      <strong>やってほしいことを書く</strong>
      <span>同時に、やらないでほしいことも書く。</span>
    </div>
    <div class="card orange" data-icon="3">
      <strong>変更前に方針を確認</strong>
      <span>いきなり実行せず、進め方を見てから任せる。</span>
    </div>
  </div>
  <div class="mock">
<span class="ok">よい依頼例</span><br>
変更はまだ行わず、<br>
構成、実行方法、テスト方法、<br>
注意点を整理してください。
  </div>
</div>

<div class="note">AIは便利な相談相手ですが、丸投げ先ではありません。</div>

---

# 最初に避けたいこと

慣れるまでは、取り消しにくい操作や影響範囲が大きい作業は任せません。

<div class="grid">
  <div class="card pink" data-icon="NG">
    <strong>危険なGit操作</strong>
    <span>git reset / git clean / git rebase / force push</span>
  </div>
  <div class="card orange" data-icon="DEL">
    <strong>削除や大量変更</strong>
    <span>ファイル削除、ディレクトリ削除、大きなリファクタリング</span>
  </div>
  <div class="card" data-icon="KEY">
    <strong>秘密情報</strong>
    <span>.env、APIキー、トークン、秘密鍵</span>
  </div>
  <div class="card green" data-icon="DB">
    <strong>本番環境</strong>
    <span>本番環境、本番DB、戻しにくいデータ操作</span>
  </div>
</div>

<div class="warning">迷ったら、その場で止めて確認します。</div>

---

# AIの返答は鵜呑みにしない

AIは自然に見える文章で、間違ったことを言う場合があります。

<div class="grid">
  <div class="card" data-icon="1">
    <strong>参照先を見る</strong>
    <span>AIが読んだファイルや情報が正しいか確認する。</span>
  </div>
  <div class="card green" data-icon="2">
    <strong>存在確認をする</strong>
    <span>存在しない仕様やAPIを前提にしていないか見る。</span>
  </div>
  <div class="card pink" data-icon="3">
    <strong>批判的な観点を頼む</strong>
    <span>「問題点、リスク、反対意見も挙げて」と明示して聞く。</span>
  </div>
  <div class="card orange" data-icon="4">
    <strong>テストとレビューで確認する</strong>
    <span>もっともらしいだけでは採用しない。</span>
  </div>
</div>

<div class="note">「この方針の弱点も教えてください」と聞くのが大切です。</div>

---

# これから小さく試していく

最初から完璧な使い方を決めるのではなく、小さく試しながらチームで育てていきます。

<div class="grid">
  <div class="card" data-icon="UP">
    <strong>便利だった使い方を見つける</strong>
    <span>他の人も真似しやすい使い方を少しずつ増やす。</span>
  </div>
  <div class="card green" data-icon="?">
    <strong>分かりにくかったことを集める</strong>
    <span>あとでFAQや説明資料を育てる材料にする。</span>
  </div>
  <div class="card pink" data-icon="LOG">
    <strong>つまずいたところを残す</strong>
    <span>個人の失敗ではなく、チームの改善点として扱う。</span>
  </div>
  <div class="card orange" data-icon="!">
    <strong>危なそうな提案を記録する</strong>
    <span>ヒヤリハットとして残し、次の事故を防ぐ。</span>
  </div>
</div>

<div class="note">小さな気づきが、あとでチームの使い方を育てる材料になります。</div>

---

# 次回セッションで扱うこと

第0回では、AIツール全般の見方をそろえました。

<div class="next-card">
  <strong>AI開発支援ツールを安全に試す</strong>
  <span>サンプルプロジェクトを使って、コードを書かせる前にプロジェクトを説明してもらう流れを見ます。</span>
</div>

<div class="note">次回は、まずプロジェクトを理解するところから始めます。</div>
