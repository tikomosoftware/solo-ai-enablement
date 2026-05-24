---
marp: true
theme: default
paginate: true
---

<!--
このファイルは投影用のMarpスライドです。
構成や話すポイントの原本は 01-slides-outline-30min.md です。
表示内容を変える場合は、原本とMarp版の両方を確認してください。
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
code {
  font-family: "Cascadia Mono", Consolas, monospace;
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
.series-label {
  color: #475569;
  font-size: 22px;
  font-weight: 700;
  margin-top: 6px;
}
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.cover-line {
  width: 680px;
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
.portrait-comment {
  display: block;
  margin-top: 12px;
  font-size: 18px !important;
  color: #64748b;
  text-align: center;
  width: 100%;
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
.roadmap-current {
  border-color: #2f80ed;
  border-left: 6px solid #2f80ed;
  background: #ffffff;
}
.roadmap-current .agenda-no,
.roadmap-current .agenda-title {
  color: #14213d;
}
.roadmap-future {
  background: #f1f5f9;
  border-color: #d8dee9;
  opacity: 0.78;
}
.roadmap-future .agenda-no,
.roadmap-future .agenda-title,
.roadmap-future .agenda-detail {
  color: #64748b;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-top: 24px;
}
.grid-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14px;
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
.flow {
  display: grid;
  grid-template-columns: 1fr 38px 1fr 38px 1fr;
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
.arrow {
  color: #2f80ed;
  font-size: 30px;
  text-align: center;
  font-weight: 700;
}
</style>

<div class="center">

<div class="kicker">CLAUDE CODE INTERNAL SERIES</div>
<div class="series-label">Claude Code社内活用シリーズ 第1回</div>

# Claude Codeをチームで安全に使い始める

<div class="cover-line"></div>

<p class="lead"><span class="cover-date">30分説明会</span>まずはプロジェクトを解析してもらおう</p>

<p class="cover-note">～コード修正は行わず、構成、実行方法、注意点を一緒に整理します。～</p>

<small class="cover-small">初めての人も、経験がある人も、同じ入口から始めます。</small>

</div>

---

<div class="guide">
<div>

<div class="kicker">GUIDE</div>

# 今日の案内役

<p class="profile-lead">現場でAI活用を始めるための、最初の相談役です。</p>

- 名前: 佐伯 悠人（通称）
- 所属: 株式会社ネクストワークス AI活用支援チーム
- 経歴: AI推進室、事業会社のAI活用推進担当などを経験
- 普段の仕事: Claude Codeを中心に、AIを使った業務改善や開発支援を提案・サポート
- 今日の立ち位置: Claude Codeを一緒に安全に試すための案内役
- 困ったときの相談先: 弊社担当までお気軽にご相談ください

<div class="profile-personal">
<div><strong>最近ハマっていること</strong><span>AIにあえて厳しめの質問をして、どこで間違えるか観察すること</span></div>
<div><strong>好きな仕事</strong><span>現場の小さな困りごとを、仕組みで少し楽にすること</span></div>
<div><strong>大事にしていること</strong><span>便利さと安全さを、どちらも諦めないこと</span></div>
</div>

</div>

<div class="portrait-wrap">
<img class="portrait" src="../session-00-ai-basics/assets/facilitator-placeholder.png" />
<img class="company-logo" src="../session-00-ai-basics/assets/nextworks-ai-logo.png" />
<small class="portrait-comment">実はCodex推し</small>
</div>
</div>

---

# Claude Code社内活用シリーズ

<div class="note">全4回で、Claude Codeをチームで安全に使い始める流れを共有します。今日は第1回「安全な使い始め方」だけを扱います。</div>

<div class="agenda">
<div class="agenda-item roadmap-current"><div class="agenda-no">01</div><div><div class="agenda-title">第1回: 安全な使い始め方</div><div class="agenda-detail">起動場所、ルール確認、権限確認、プロジェクト解析の依頼を扱います。</div></div></div>
<div class="agenda-item roadmap-future"><div class="agenda-no">02</div><div><div class="agenda-title">第2回: 小さな修正を依頼する</div><div class="agenda-detail">変更前に計画を確認しながら、影響範囲の小さい修正を試します。</div></div></div>
<div class="agenda-item roadmap-future"><div class="agenda-no">03</div><div><div class="agenda-title">第3回: チームの運用にする</div><div class="agenda-detail">相談先、レビュー、承認、つまずき共有の流れを整理します。</div></div></div>
<div class="agenda-item roadmap-future"><div class="agenda-no">04</div><div><div class="agenda-title">第4回: 実プロジェクトへ広げる</div><div class="agenda-detail">プロジェクトごとのルールや依頼文、FAQを育てていきます。</div></div></div>
</div>

---

# 本日の流れ

<div class="agenda">
<div class="agenda-item"><div class="agenda-no">01</div><div><div class="agenda-title">この回の目的</div><div class="agenda-detail">いきなり実装ではなく、まずプロジェクトを解析してもらいます。</div></div></div>
<div class="agenda-item"><div class="agenda-no">02</div><div><div class="agenda-title">Claude Codeの基本</div><div class="agenda-detail">開発作業を手伝うAIエージェントとして、できることと距離感を確認します。</div></div></div>
<div class="agenda-item"><div class="agenda-no">03</div><div><div class="agenda-title">第0回のおさらい</div><div class="agenda-detail">AIツールを使うときの基本を確認し、Claude Codeの実演に進みます。</div></div></div>
<div class="agenda-item"><div class="agenda-no">04</div><div><div class="agenda-title">サンプルプロジェクトで実演</div><div class="agenda-detail">起動場所、ルール確認、権限確認、最初の依頼を一緒に見ます。</div></div></div>
<div class="agenda-item"><div class="agenda-no">05</div><div><div class="agenda-title">次回に向けて</div><div class="agenda-detail">小さく使ってみて、困ったことや気づきをチームの学びにします。</div></div></div>
</div>

---

# この回の目的

Claude Codeに、いきなり実装を任せる会ではありません。

<div class="next-card">
<strong>まずは「プロジェクトを解析してもらう」</strong>
<span>サンプルプロジェクトを使って、構成、実行方法、テスト方法、注意点を整理する流れを確認します。コード修正は行いません。</span>
</div>

<div class="note">経験差があっても大丈夫です。今日は、同じ安全な入口をチームでそろえる時間です。</div>

---

# Claude Codeとは

開発作業を支援するAIエージェントです。

<div class="grid">
<div class="card"><strong>読む</strong><span>プロジェクト内のファイルを参照し、構成や処理の流れを整理できます。</span></div>
<div class="card"><strong>考える</strong><span>実装方針、レビュー観点、注意点、調査の進め方を一緒に考えられます。</span></div>
<div class="card"><strong>書く</strong><span>必要に応じてコードやドキュメントの編集も支援できます。</span></div>
<div class="card"><strong>動かす</strong><span>権限設定の範囲で、コマンド実行や確認作業も支援できます。</span></div>
</div>

<div class="warning">強力なツールなので、最初は「書かせる」より「説明してもらう」使い方から始めます。</div>

---

# 第0回のおさらい

<div class="grid">
<div class="card"><strong>相談は小さく区切る</strong><span>1回の相談（1セッション）は、1つの目的に絞ります。</span></div>
<div class="card"><strong>AIの提案は確認する</strong><span>問題点、リスク、反対意見もAIに出してもらい、人間が判断します。</span></div>
<div class="card"><strong>危ない操作は避ける</strong><span>削除、履歴操作、秘密情報、本番環境への操作は最初は扱いません。</span></div>
<div class="card"><strong>分からないことは聞く</strong><span>コードの意味、実行方法、確認観点などは気軽に聞いて大丈夫です。</span></div>
</div>

<div class="note">詳しくは第0回「AIツールを使い始める前の基本」で扱いました。第1回では、Claude Codeの起動とプロジェクト解析に進みます。</div>

---

# 実演で見るポイント

<div class="flow">
<div class="flow-box"><strong>起動場所</strong><span>対象リポジトリのルートで起動する</span></div>
<div class="arrow">→</div>
<div class="flow-box"><strong>ルール確認</strong><span><code>/memory</code> で読み込まれたルールを見る</span></div>
<div class="arrow">→</div>
<div class="flow-box"><strong>権限確認</strong><span><code>/permissions</code> で実行できる操作を確認する</span></div>
</div>

<div class="grid-3">
<div class="card"><strong>VS Code</strong><span>1プロジェクト1ウィンドウで開く</span></div>
<div class="card"><strong>モード</strong><span>最初は <code>plan</code> mode で調査する</span></div>
<div class="card"><strong>依頼</strong><span>プロジェクト構成を解析してもらう。コード修正はしない</span></div>
</div>

---

# 最初の依頼例

<div class="mock">
<span class="muted">依頼例</span><br />
まずこのリポジトリの構成を調査してください。<br />
変更はまだ行わず、主要なフォルダ、実行方法、<br />
テスト方法、注意点を整理してください。
</div>

<div class="next-card">
<strong>最初は「実装」ではなく「プロジェクト解析」</strong>
<span>プロジェクトの理解を手伝ってもらうだけでも、初回利用として十分価値があります。</span>
</div>

---

<div class="center">

<div class="kicker">DEMO</div>

# ここから実演に入ります

<div class="cover-line"></div>

<p class="lead">サンプルプロジェクトを使って、起動場所、ルール確認、権限確認、プロジェクト解析の依頼までを一緒に見ます。</p>

<small class="cover-small">細かい操作を全部覚えるより、まずは安全な流れを見てください。</small>

</div>

---

# 次にやってみること

<div class="agenda">
<div class="agenda-item"><div class="agenda-no">01</div><div><div class="agenda-title"><code>docs/start-guide.md</code> を見る</div><div class="agenda-detail">起動場所、VS Codeの開き方、最初の注意点を確認します。</div></div></div>
<div class="agenda-item"><div class="agenda-no">02</div><div><div class="agenda-title"><code>docs/first-exercise.md</code> をやってみる</div><div class="agenda-detail">最初の課題では、コード変更やコミットは行いません。</div></div></div>
<div class="agenda-item"><div class="agenda-no">03</div><div><div class="agenda-title">不安だったことを共有する</div><div class="agenda-detail">便利だった点も、分かりにくかった点も、次の改善材料になります。</div></div></div>
</div>

---

# 困ったら気軽に聞く

分からないまま一人で進めなくて大丈夫です。

<div class="split-even">
<div class="card">
<strong>最初に相談する相手</strong>
<span>説明会の担当者<br />プロジェクトのリーダー<br />AI推進担当・相談窓口</span>
</div>
<div class="card">
<strong>困ったときに見る資料</strong>
<span><code>docs/faq.md</code><br /><code>docs/common-pitfalls.md</code><br /><code>docs/glossary.md</code></span>
</div>
</div>

<div class="note">迷ったら、資料を探し回る前にまず声をかけてください。質問されたことは、あとでFAQや説明資料に反映していきます。</div>

---

# 小さなつまずきも共有する

<div class="grid">
<div class="card"><strong>危なそうな提案</strong><span>AIが影響の大きい操作を提案した、判断に迷った。</span></div>
<div class="card"><strong>分かりにくかったこと</strong><span>用語、画面、コマンド、説明のどこで止まったか。</span></div>
<div class="card"><strong>自分がつまずいたところ</strong><span>小さな失敗やヒヤリハットも、あとでチームの学びになります。</span></div>
<div class="card"><strong>便利だった使い方</strong><span>うまくいった聞き方や、助かった使い方も共有します。</span></div>
</div>

<div class="next-card">
<strong>個人の失敗ではなく、チームの資産にする</strong>
<span>安全に使うための知見は、小さな気づきから育ちます。</span>
</div>

---

# 次回予告

次回までに、各自で小さく使ってみてください。

<div class="next-card">
<strong>第2回: 小さな修正を依頼してみる</strong>
<span>変更前に計画を確認しながら、影響範囲の小さい修正をClaude Codeに依頼する流れを見ます。</span>
</div>

<div class="agenda">
<div class="agenda-item"><div class="agenda-no">01</div><div><div class="agenda-title">小さい修正候補を考える</div><div class="agenda-detail">文言修正、README追記、小さな不具合調査など、影響が小さいものを選びます。</div></div></div>
<div class="agenda-item"><div class="agenda-no">02</div><div><div class="agenda-title">変更前に計画を確認する</div><div class="agenda-detail">いきなり実装ではなく、方針、影響範囲、確認方法を先に出してもらいます。</div></div></div>
<div class="agenda-item"><div class="agenda-no">03</div><div><div class="agenda-title">つまずきを共有する</div><div class="agenda-detail">不安だった点や便利だった使い方を、次回の題材にします。</div></div></div>
</div>
