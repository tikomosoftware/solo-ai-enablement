---
marp: true
theme: default
paginate: false
---

<!--
YouTube版スライド。
元の投影用Marpの本文を引き継ぎ、session-00-ai-basics/youtube-slide-style-guide.md のルールに合わせて調整しています。
公式ロゴ画像は使わず、カード、補足ボックス、章扉で見せる構成にします。
-->

<style>
:root {
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
  --green: var(--color-success);
  --pink: var(--color-highlight);
  --orange: var(--color-warm);
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
    linear-gradient(180deg, #ffffff 0%, var(--color-page-bottom) 100%);
  padding: 76px 64px 42px;
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
  right: -120px;
  bottom: -130px;
  width: 360px;
  height: 360px;
  border-radius: 999px;
  background: rgba(9, 105, 218, 0.07);
  z-index: 0;
}

section > * { position: relative; z-index: 1; }

h1 {
  margin: 0 0 22px;
  color: var(--navy);
  font-size: 52px;
  line-height: 1.1;
  font-weight: 900;
  text-shadow: 0 4px 0 #ffffff, 3px 3px 0 rgba(9, 105, 218, 0.18);
}

h2 { color: var(--navy); font-size: 34px; font-weight: 900; }
p, li { font-size: 24px; line-height: 1.42; }
small { color: #496178; }
strong { font-weight: 900; }
code { font-family: "Cascadia Mono", Consolas, monospace; }

.series-label {
  display: inline-block;
  margin: 18px 0 10px;
  color: var(--navy);
  font-size: 24px;
  font-weight: 900;
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 540px;
}

.center h1 { font-size: 70px; max-width: 980px; }
.lead { color: var(--navy); font-size: 32px; line-height: 1.35; font-weight: 900; }
.cover-date { display: block; margin-bottom: 8px; color: #4b6178; font-size: 22px; font-weight: 900; }
.cover-note { margin-top: 18px; color: #334960; font-size: 24px; line-height: 1.38; }
.cover-small { display: block; margin-top: 24px; color: #50657a; font-size: 18px; }
.cover-line {
  width: 620px;
  height: 6px;
  margin: 20px 0 18px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--blue), var(--color-pill-purple));
}

.guide {
  display: grid;
  grid-template-columns: 1fr 250px;
  gap: 28px;
  align-items: center;
  min-height: 520px;
}
.profile-lead { margin: 0 0 16px; color: var(--pink); font-size: 30px; font-weight: 900; line-height: 1.28; }
.guide ul { margin: 0; padding-left: 28px; }
.guide li { margin-bottom: 7px; font-size: 20px; line-height: 1.35; }
.profile-personal { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 16px; }
.profile-personal div { background: #ffffff; border: 3px solid #bde6ff; border-radius: 18px; padding: 12px 14px; }
.profile-personal strong { display: block; color: var(--navy); font-size: 18px; margin-bottom: 5px; }
.profile-personal span { display: block; color: #40566d; font-size: 15px; line-height: 1.32; }
.portrait-wrap { width: 250px; text-align: center; }
.portrait { width: 230px; height: 230px; object-fit: cover; border-radius: 999px; border: 8px solid #ffffff; box-shadow: 0 12px 28px rgba(11, 43, 85, 0.20); }
.company-logo { display: none; }
.portrait-comment { display: inline-block; margin-top: 12px; background: #fff4d8; border: 3px solid #ffba4a; border-radius: 999px; padding: 6px 14px; color: var(--navy); font-size: 17px !important; font-weight: 900; }

.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 20px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 20px; }
.card {
  background: rgba(255, 255, 255, 0.96);
  border: 3px solid #bde6ff;
  border-radius: 18px;
  padding: 20px 22px;
  box-shadow: 0 8px 0 rgba(9, 105, 218, 0.10);
}
.card strong { display: block; color: var(--navy); font-size: 25px; line-height: 1.2; margin-bottom: 8px; }
.card span { display: block; color: #334960; font-size: 18px; line-height: 1.38; }
.grid-3 .card { padding: 16px 18px; }
.grid-3 .card strong { font-size: 22px; }
.grid-3 .card span { font-size: 16px; }

.agenda { display: grid; gap: 12px; margin-top: 18px; }
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
  font-size: 20px;
  font-weight: 900;
}
.agenda-title { color: var(--navy); font-size: 24px; font-weight: 900; line-height: 1.16; }
.agenda-detail { color: #40566d; font-size: 15px; line-height: 1.28; margin-top: 4px; }
.agenda-item:nth-child(2) { border-color: #a9e8d5; }
.agenda-item:nth-child(2) .agenda-no { background: var(--green); }
.agenda-item:nth-child(3) { border-color: #ffd0df; }
.agenda-item:nth-child(3) .agenda-no { background: var(--pink); }
.agenda-item:nth-child(4) { border-color: #ffd59b; }
.agenda-item:nth-child(4) .agenda-no { background: var(--orange); }
.roadmap-current { border-color: #ffd0df; background: #ffffff; }
.roadmap-current .agenda-no { background: var(--pink); }
.roadmap-past, .roadmap-future { background: #f7fbff; opacity: 0.78; }
.roadmap-past .agenda-no, .roadmap-future .agenda-no { background: #9bb4cc; }
.roadmap-past .agenda-title, .roadmap-past .agenda-detail, .roadmap-future .agenda-title, .roadmap-future .agenda-detail { color: #60768c; }

.note, .warning {
  margin-top: 22px;
  border-radius: 18px;
  padding: 16px 22px;
  font-size: 24px;
  font-weight: 900;
  line-height: 1.35;
}
.note { color: var(--navy); background: #e7f7ff; border: 3px solid #87cfff; }
.warning { color: #7a2900; background: #fff4d8; border: 3px solid #ffba4a; }

.mock {
  background: #10213a;
  color: #ffffff;
  border: 4px solid #ffffff;
  border-radius: 18px;
  padding: 20px 22px;
  font-family: "Cascadia Mono", Consolas, monospace;
  font-size: 20px;
  line-height: 1.45;
  margin-top: 22px;
  box-shadow: 0 9px 0 rgba(9, 105, 218, 0.18);
}
.mock .muted { color: #a9c9e8; }
.mock .ok { color: #8ff0b2; font-weight: 900; }

.next-card {
  margin-top: 28px;
  background: #ffffff;
  border: 4px solid #ffd0df;
  border-radius: 20px;
  padding: 24px 30px;
  box-shadow: 0 10px 0 rgba(239, 63, 115, 0.14);
}
.next-card strong { display: block; color: var(--pink); font-size: 34px; margin-bottom: 10px; }
.next-card span { display: block; color: var(--navy); font-size: 24px; line-height: 1.35; font-weight: 900; }

.flow { display: flex; gap: 14px; align-items: center; margin-top: 24px; }
.flow-box { flex: 1; min-height: 118px; display: flex; flex-direction: column; justify-content: center; background: #ffffff; border: 3px solid #bde6ff; border-radius: 18px; padding: 18px; box-shadow: 0 8px 0 rgba(9, 105, 218, 0.10); }
.flow-box strong { color: var(--navy); font-size: 24px; margin-bottom: 6px; }
.flow-box span { color: #40566d; font-size: 17px; line-height: 1.35; }
.arrow { flex: 0 0 34px; color: var(--orange); font-size: 32px; font-weight: 900; text-align: center; }
.split-even { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; align-items: start; }
</style>

<div class="center">

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

# 今日の案内役

<p class="profile-lead">現場でAI活用を始めるための、最初の相談役です。</p>

- 名前: 佐伯 悠人（通称）
- 所属: (株) NEURAMNESIA AI活用支援チーム
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
