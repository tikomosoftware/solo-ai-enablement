---
marp: true
theme: default
paginate: true
---

<!--
第0回は、AIをほとんど知らない人向けの入口資料です。
製品名は理解を助けるための例で、特定製品の推奨リストではありません。
公式ロゴ画像は使わず、製品名バッジと画面イメージで表現します。
-->

<style>
section {
  font-family: "Yu Gothic", "Meiryo", sans-serif;
  color: #17202a;
  background: #fbfaf7;
  padding: 48px 64px;
}
h1 {
  color: #14213d;
  font-size: 42px;
  line-height: 1.18;
}
h2 {
  color: #14213d;
}
p, li {
  font-size: 24px;
  line-height: 1.45;
}
small {
  color: #5f6b7a;
}
.lead {
  font-size: 28px;
  line-height: 1.5;
}
.cover-note {
  font-size: 22px;
  line-height: 1.45;
  color: #334155;
  margin-top: 22px;
}
.cover-date {
  display: block;
  font-size: 22px;
  color: #475569;
  margin-bottom: 8px;
}
.kicker {
  color: #64748b;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-top: 24px;
}
.card {
  border: 1px solid #d8dee9;
  background: #ffffff;
  border-radius: 8px;
  padding: 20px 22px;
}
.card strong {
  display: block;
  color: #14213d;
  font-size: 24px;
  margin-bottom: 10px;
}
.card span {
  display: block;
  color: #475569;
  font-size: 19px;
  line-height: 1.42;
}
.brand-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}
.brand {
  border: 1px solid #cbd5e1;
  background: #ffffff;
  border-radius: 999px;
  padding: 9px 15px;
  font-size: 21px;
  font-weight: 700;
  color: #1f2937;
}
.mock {
  background: #111827;
  color: #e5e7eb;
  border-radius: 8px;
  padding: 22px 24px;
  font-family: "Cascadia Mono", Consolas, monospace;
  font-size: 22px;
  line-height: 1.5;
  margin-top: 24px;
}
.mock .muted {
  color: #9ca3af;
}
.mock .ok {
  color: #86efac;
}
.next-card {
  background: #ffffff;
  border: 1px solid #d8dee9;
  border-left: 6px solid #2f80ed;
  border-radius: 8px;
  padding: 22px 26px;
  margin-top: 26px;
}
.next-card strong {
  display: block;
  color: #14213d;
  font-size: 28px;
  margin-bottom: 10px;
}
.next-card span {
  display: block;
  color: #334155;
  font-size: 24px;
  line-height: 1.45;
}
.split {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 28px;
  align-items: start;
}
.split-even {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
}
.note {
  background: #eef6ff;
  border-left: 6px solid #2f80ed;
  padding: 18px 22px;
  margin-top: 24px;
  font-size: 24px;
}
.warning {
  background: #fff7ed;
  border-left: 6px solid #f97316;
  padding: 18px 22px;
  margin-top: 24px;
  font-size: 24px;
}
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.cover-line {
  width: 640px;
  height: 4px;
  background: #2f80ed;
  border-radius: 999px;
  margin: 24px 0 18px;
}
.cover-small {
  display: block;
  margin-top: 30px;
}
.guide {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 36px;
  align-items: center;
  height: 82%;
}
.portrait {
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #d8dee9;
}
.portrait-wrap {
  position: relative;
  width: 280px;
}
.company-logo {
  width: 64px;
  height: auto;
  display: block;
  position: absolute;
  right: 0;
  bottom: 54px;
  background: #ffffff;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.16);
}
.profile-list {
  margin-top: 16px;
  padding-left: 24px;
}
.profile-list li {
  margin-bottom: 8px;
  font-size: 21px;
}
.profile-lead {
  color: #14213d;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.35;
  margin: 0 0 12px;
}
.profile-personal {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 12px;
}
.profile-personal div {
  background: #ffffff;
  border: 1px solid #d8dee9;
  border-radius: 8px;
  padding: 10px 12px;
}
.profile-personal strong {
  display: block;
  color: #14213d;
  font-size: 17px;
  margin-bottom: 4px;
}
.profile-personal span {
  display: block;
  color: #475569;
  font-size: 16px;
  line-height: 1.35;
}
.flow {
  display: grid;
  grid-template-columns: 1fr 38px 1fr 38px 1fr 38px 1fr;
  gap: 10px;
  align-items: center;
  margin-top: 28px;
}
.flow-box {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 18px;
  min-height: 118px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.flow-box strong {
  color: #14213d;
  font-size: 23px;
  margin-bottom: 8px;
}
.flow-box span {
  color: #475569;
  font-size: 18px;
  line-height: 1.4;
}
.project-stack {
  display: grid;
  gap: 8px;
}
.project-item {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 10px 12px;
  box-shadow: 0 6px 14px rgba(15, 23, 42, 0.05);
}
.project-item strong {
  display: block;
  color: #14213d;
  font-size: 18px;
  margin-bottom: 3px;
}
.project-item span {
  display: block;
  color: #475569;
  font-size: 15px;
  line-height: 1.3;
}
.arrow {
  color: #2f80ed;
  font-size: 30px;
  text-align: center;
  font-weight: 700;
}
.agenda {
  display: grid;
  gap: 12px;
  margin-top: 22px;
}
.agenda-item {
  display: grid;
  grid-template-columns: 34px 1fr;
  gap: 14px;
  align-items: start;
  background: #ffffff;
  border: 1px solid #d8dee9;
  border-radius: 8px;
  padding: 13px 16px;
}
.agenda-no {
  color: #2f80ed;
  font-size: 20px;
  font-weight: 700;
}
.agenda-title {
  color: #14213d;
  font-size: 22px;
  font-weight: 700;
}
.agenda-detail {
  color: #475569;
  font-size: 17px;
  line-height: 1.35;
  margin-top: 3px;
}
.portrait-comment {
  display: block;
  margin-top: 12px;
  font-size: 18px !important;
  color: #64748b;
  text-align: center;
  width: 100%;
}
</style>

<div class="center">

<div class="kicker">SESSION 00</div>

# AIツールを使い始める前の基本

<div class="cover-line"></div>

<p class="lead"><span class="cover-date">2026/05版</span>AIチャット、AIエディタ、AIエージェントの最初の地図</p>

<p class="cover-note">～AI活用を始める現場に寄り添って、基本の考え方を案内します。～</p>

<small class="cover-small">製品名は理解を助けるための例です。</small>

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
      <li>普段の仕事: Claude Codeを中心に、AIを使った業務改善や開発支援を提案・サポート</li>
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
      <img class="company-logo" src="./assets/neuramnesia-logo.svg" alt="NEURAMNESIA ロゴ">
      <div class="portrait-comment">実はCodex推し😄</div>
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
      <div class="agenda-title">今後と次回セッション</div>
      <div class="agenda-detail">小さく試して、次のClaude Code説明会につなげる</div>
    </div>
  </div>
</div>

---

# この回の目的

Claude Codeを使う前に、AIツール全般に共通する基本をそろえます。

<div class="grid">
  <div class="card">
    <strong>どう使うと役に立つか</strong>
    <span>質問、整理、たたき台、レビュー観点など、最初に試しやすい使い方を知る。</span>
  </div>
  <div class="card">
    <strong>どこに注意するか</strong>
    <span>機密情報、危険な操作、AIの間違い、裏取りの必要性を知る。</span>
  </div>
</div>

<div class="note">今日は特定ツールの操作説明ではなく、AIを業務で使うときの基本姿勢を扱います。</div>

---

# 現場でよくあるつまずき

AIを使い始めるとき、最初につまずきやすい点があります。

<div class="grid">
  <div class="card">
    <strong>何を聞けばいいか分からない</strong>
    <span>最初からうまいプロンプトを書こうとして止まってしまう。</span>
  </div>
  <div class="card">
    <strong>ツールの違いが分からない</strong>
    <span>チャット、エディタ、エージェントの使い分けが見えにくい。</span>
  </div>
  <div class="card">
    <strong>どこまで信じていいか分からない</strong>
    <span>もっともらしい回答と正しい回答の区別が難しい。</span>
  </div>
  <div class="card">
    <strong>業務で使うのは少し不安</strong>
    <span>機密情報、権限、危険な操作が気になって踏み出しにくい。</span>
  </div>
</div>

---

# AIの種類と使い方例

「ツールの使い方がわからない」への回答です。

まずは、AIツールの種類と代表的な使い方を見ていきます。

---

# AIツールにも種類がある

同じ「AI」でも、できることや任せてよい範囲は違います。

<div class="grid">
  <div class="card">
    <strong>AIチャット</strong>
    <span>質問、文章作成、アイデア出し、説明</span>
  </div>
  <div class="card">
    <strong>AIエディタ/IDE</strong>
    <span>コード補完、小さな修正、コード説明</span>
  </div>
  <div class="card">
    <strong>AIエージェント</strong>
    <span>作業の相談、リポジトリ調査、編集支援、コマンド実行支援</span>
  </div>
  <div class="card">
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
CLI型と、アプリやチャット画面から頼めるタイプがあります。

<div class="brand-row">
  <span class="brand">Claude Code</span>
  <span class="brand">Codex CLI</span>
  <span class="brand">Codex app</span>
  <span class="brand">Gemini CLI</span>
  <span class="brand">Copilot CLI</span>
  <span class="brand">Kiro CLI</span>
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

<div class="brand-row">
  <span class="brand">Codex app</span>
  <span class="brand">Codex web</span>
  <span class="brand">Google Antigravity</span>
  <span class="brand">複数エージェント開発環境</span>
</div>

<div class="flow">
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

# 何から始めるのがよいのか

「何を聞けばいいか分からない」への回答です。

最初は、完璧な依頼ではなく、小さな相談から始めます。

---

# まずは気軽に聞いてみる

最初から完璧なプロンプトを書く必要はありません。

<div class="grid">
  <div class="card">
    <strong>説明してもらう</strong>
    <span>この資料やコードの要点を説明してください。</span>
  </div>
  <div class="card">
    <strong>原因候補を出す</strong>
    <span>このエラーや手戻りの原因候補を教えてください。</span>
  </div>
  <div class="card">
    <strong>進め方を整理する</strong>
    <span>この作業の進め方を整理してください。</span>
  </div>
  <div class="card">
    <strong>観点を出す</strong>
    <span>レビューや確認で見るべき観点を出してください。</span>
  </div>
</div>

---

# AIエージェントには作業として頼める

Codex app、Kiro、Claude Codeなどでは、
会話だけでなく作業単位で相談できます。

<div class="grid">
  <div class="card">
    <strong>機能追加</strong>
    <span>この画面に検索機能を追加してください。</span>
  </div>
  <div class="card">
    <strong>バグ修正</strong>
    <span>このエラーの原因を調べて、修正案を出してください。</span>
  </div>
  <div class="card">
    <strong>小さな変更</strong>
    <span>この文言をユーザー向けに分かりやすく直してください。</span>
  </div>
  <div class="card">
    <strong>確認作業</strong>
    <span>この差分で注意すべき点をレビューしてください。</span>
  </div>
</div>

<div class="note">最初は「いきなり変更」ではなく、調査と方針確認から始めると安心です。</div>

---

# 業務改善で使える例

開発作業だけでなく、日々の業務の整理にも使えます。

<div class="grid">
  <div class="card">
    <strong>議事録の整理</strong>
    <span>会議メモを要点、決定事項、宿題に分けて整理する。</span>
  </div>
  <div class="card">
    <strong>手順書のたたき台</strong>
    <span>作業メモから、初めての人向けの手順書を作る。</span>
  </div>
  <div class="card">
    <strong>問い合わせ対応の下書き</strong>
    <span>相手に伝わりやすい返信文や確認事項を整理する。</span>
  </div>
  <div class="card">
    <strong>FAQや改善案の整理</strong>
    <span>よくある質問や困りごとから、改善の候補を出す。</span>
  </div>
</div>

<div class="note">最初は、機密情報を含まない小さな作業から試すと始めやすいです。</div>

---

# 使用時のコツや注意

「どこまで信じていいか分からない」
「業務で使うのは少し不安」への回答です。

便利に使うために、最初に押さえたい注意点を見ていきます。

---

# うまく使うためのコツ

<div class="split">
  <div>
    <ul>
      <li>1回の相談（1セッション）は1つの目的に絞る</li>
      <li>長くなったら新しいセッションで相談し直す</li>
      <li>何をしてほしいかを書く</li>
      <li>何をしないでほしいかも書く</li>
      <li>変更前に方針を確認する</li>
    </ul>
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
  <div class="card">
    <strong>危険なGit操作</strong>
    <span>git reset / git clean / git rebase / force push</span>
  </div>
  <div class="card">
    <strong>削除や大量変更</strong>
    <span>ファイル削除、ディレクトリ削除、大きなリファクタリング</span>
  </div>
  <div class="card">
    <strong>秘密情報</strong>
    <span>.env、APIキー、トークン、秘密鍵</span>
  </div>
  <div class="card">
    <strong>本番環境</strong>
    <span>本番環境、本番DB、戻しにくいデータ操作</span>
  </div>
</div>

<div class="warning">迷ったら、その場で止めて確認します。</div>

---

# AIの返答は鵜呑みにしない

AIは自然に見える文章で、間違ったことを言う場合があります。
また、こちらの意見に同意する方向で返ってくることがあります。

<div class="grid">
  <div class="card">
    <strong>参照先を見る</strong>
    <span>AIが読んだファイルや情報が正しいか確認する。</span>
  </div>
  <div class="card">
    <strong>存在確認をする</strong>
    <span>存在しない仕様やAPIを前提にしていないか見る。</span>
  </div>
  <div class="card">
    <strong>批判的な観点を頼む</strong>
    <span>「問題点、リスク、反対意見も挙げて」と明示して聞く。</span>
  </div>
  <div class="card">
    <strong>テストとレビューで確認する</strong>
    <span>もっともらしいだけでは採用しない。</span>
  </div>
</div>

<div class="note">「この方針でよいですか」だけでなく、「この方針の弱点も教えてください」と聞くのが大切です。</div>

---

# これから小さく試していく

最初から完璧な使い方を決めるのではなく、
小さく試しながらチームで育てていきます。

<div class="grid">
  <div class="card">
    <strong>便利だった使い方を見つける</strong>
    <span>他の人も真似しやすい使い方を少しずつ増やす。</span>
  </div>
  <div class="card">
    <strong>分かりにくかったことを集める</strong>
    <span>あとでFAQや説明資料を育てる材料にする。</span>
  </div>
  <div class="card">
    <strong>つまずいたところを残す</strong>
    <span>個人の失敗ではなく、チームの改善点として扱う。</span>
  </div>
  <div class="card">
    <strong>危なそうな提案を記録する</strong>
    <span>ヒヤリハットとして残し、次の事故を防ぐ。</span>
  </div>
</div>

<div class="note">小さな気づきが、あとでチームの使い方を育てる材料になります。</div>

---

# 次につなげる

第0回では、AIツール全般の見方をそろえました。

<div class="next-card">
  <strong>次回: Claude Codeを安全に試す</strong>
  <span>サンプルプロジェクトを使って、コードを書かせる前にプロジェクトを説明してもらう流れを見ます。</span>
</div>

まずは、実装ではなく「調査」と「確認」から始めます。
