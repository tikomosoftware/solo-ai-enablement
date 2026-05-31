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

<div class="series-label">Claude Code社内活用シリーズ 第2回</div>

# 小さな修正を依頼してみる

<div class="cover-line"></div>

<p class="lead"><span class="cover-date">30〜40分説明会</span>変更前に計画を確認し、差分とテストを人間が見る</p>

<p class="cover-note">～初めての修正依頼は、小さく、確認できる形で進めます。～</p>

<small class="cover-small">AIに任せきりにせず、判断できる材料を出してもらう練習です。</small>

</div>

---

<div class="guide">
<div>

# 今日の案内役

<p class="profile-lead">AIに作業を丸投げせず、人間が確認できる形に整える案内役です。</p>

- 名前: 佐伯 悠人（通称）
- 所属: (株) NEURAMNESIA AI活用支援チーム
- 普段の仕事: Claude Codeを中心に、AIを使った業務改善や開発支援を提案・サポート
- 今日の立ち位置: 小さな変更を安全に試すための伴走役
- 困ったときの相談先: 弊社担当までお気軽にご相談ください

<div class="profile-personal">
<div><strong>今日見るもの</strong><span>計画、差分、確認方法、リスク</span></div>
<div><strong>今日見ないもの</strong><span>大きな設計変更や本番操作</span></div>
<div><strong>合言葉</strong><span>小さく頼んで、ちゃんと見る</span></div>
</div>

</div>

<div class="portrait-wrap">
<img class="portrait" src="../session-00-ai-basics/assets/facilitator-placeholder.png" />
<small class="portrait-comment">差分を見るまでが依頼です</small>
</div>
</div>

---

# Claude Code社内活用シリーズ

<div class="note">第1回から第4回まで、Claude Codeをチームで安全に使い始める流れを共有します。今日は第2回「小さな修正を依頼する」を扱います。</div>

<div class="agenda">
<div class="agenda-item roadmap-past"><div class="agenda-no">01</div><div><div class="agenda-title">第1回: 安全な使い始め方</div><div class="agenda-detail">起動場所、ルール確認、権限確認、プロジェクト解析を扱いました。</div></div></div>
<div class="agenda-item roadmap-current"><div class="agenda-no">02</div><div><div class="agenda-title">第2回: 小さな修正を依頼する</div><div class="agenda-detail">変更前に計画を確認しながら、影響範囲の小さい修正を試します。</div></div></div>
<div class="agenda-item roadmap-future"><div class="agenda-no">03</div><div><div class="agenda-title">第3回: チームの運用にする</div><div class="agenda-detail">相談先、レビュー、承認、つまずき共有の流れを整理します。</div></div></div>
<div class="agenda-item roadmap-future"><div class="agenda-no">04</div><div><div class="agenda-title">第4回: 実プロジェクトへ広げる</div><div class="agenda-detail">プロジェクトごとのルールや依頼文、FAQを育てていきます。</div></div></div>
</div>

---

# 本日の流れ

<div class="agenda">
<div class="agenda-item"><div class="agenda-no">01</div><div><div class="agenda-title">小さな修正候補を選ぶ</div><div class="agenda-detail">目的が1つで、影響範囲を説明できる題材を選びます。</div></div></div>
<div class="agenda-item"><div class="agenda-no">02</div><div><div class="agenda-title">変更前に計画を出してもらう</div><div class="agenda-detail">方針、触る予定のファイル、確認方法、リスクを先に見ます。</div></div></div>
<div class="agenda-item"><div class="agenda-no">03</div><div><div class="agenda-title">実装を依頼する</div><div class="agenda-detail">範囲を絞って、修正後の説明も依頼します。</div></div></div>
<div class="agenda-item"><div class="agenda-no">04</div><div><div class="agenda-title">差分とテストを確認する</div><div class="agenda-detail">AIの説明だけでなく、実際の変更内容と確認方法を見ます。</div></div></div>
<div class="agenda-item"><div class="agenda-no">05</div><div><div class="agenda-title">リスクと次の一手を整理する</div><div class="agenda-detail">採用、追加修正、保留のどれにするか人間が決めます。</div></div></div>
</div>

---

# この回のゴール

小さな修正を、最初から最後まで安全に通す型を持ち帰ります。

<div class="next-card">
<strong>計画、実装、差分確認、テスト確認までを見る</strong>
<span>完璧な修正を一発で作ることより、「確認して採用できる状態」にすることを目指します。</span>
</div>

<div class="note">今日の主役は、AIの実装力ではなく、人間が判断できる材料をそろえる流れです。</div>

---

# 小さな修正とは

<div class="grid">
<div class="card"><strong>目的が1つ</strong><span>何を直したいのか、ひとことで説明できる。</span></div>
<div class="card"><strong>影響範囲が狭い</strong><span>触るファイルや確認箇所が多すぎない。</span></div>
<div class="card"><strong>確認方法がある</strong><span>テスト、表示確認、文言確認などを説明できる。</span></div>
<div class="card"><strong>相談しやすい</strong><span>迷ったときに止めて、誰かに見てもらえる。</span></div>
</div>

<div class="note">「簡単そう」よりも、「確認しやすい」を基準に選びます。</div>

---

# 今日の題材に向いているもの

<div class="grid">
<div class="card"><strong>READMEの補足</strong><span>手順の抜け、前提条件、注意書きを少し足す。</span></div>
<div class="card"><strong>文言修正</strong><span>画面やエラーメッセージを分かりやすくする。</span></div>
<div class="card"><strong>小さな再現確認</strong><span>不具合の原因候補や確認手順を整理する。</span></div>
<div class="card"><strong>テスト追加候補</strong><span>まず既存テストを調べ、追加できそうな観点を出す。</span></div>
</div>

<div class="warning">複数機能をまたぐ修正や大きな設計変更は、今日の題材から外します。</div>

---

# 今日は避けること

<div class="grid">
<div class="card"><strong>危険なGit操作</strong><span><code>git reset</code>、<code>git clean</code>、<code>git rebase</code>、force pushなど。</span></div>
<div class="card"><strong>削除や大規模変更</strong><span>ファイル削除、大きな移動、広いリファクタリング。</span></div>
<div class="card"><strong>本番環境の操作</strong><span>本番DB、実データ、戻しにくい操作。</span></div>
<div class="card"><strong>秘密情報の貼り付け</strong><span>APIキー、トークン、顧客情報、未公開情報。</span></div>
</div>

<div class="warning">AIが提案しても、危ない操作はその場で止めます。迷ったら相談します。</div>

---

# 依頼の基本形

<div class="mock">
<span class="muted">依頼例</span><br />
この修正をしたいです。<br />
まず変更は行わず、方針、影響範囲、<br />
確認方法、リスクを整理してください。<br />
そのあと、こちらが確認してから実装に進んでください。
</div>

<div class="next-card">
<strong>最初から「直して」だけにしない</strong>
<span>変更前に、何を触るのか、どう確認するのかを出してもらいます。</span>
</div>

---

# 変更前に見るもの

<div class="grid-3">
<div class="card"><strong>方針</strong><span>どんな直し方をするのか。</span></div>
<div class="card"><strong>対象ファイル</strong><span>どこを触る予定なのか。</span></div>
<div class="card"><strong>影響範囲</strong><span>他に影響しそうな場所はあるか。</span></div>
<div class="card"><strong>確認方法</strong><span>何を見れば完了と言えるか。</span></div>
<div class="card"><strong>リスク</strong><span>見落としや不明点は何か。</span></div>
<div class="card"><strong>やらないこと</strong><span>今回の範囲外を明確にする。</span></div>
</div>

---

<div class="center">

# 題材を選ぶ

<div class="cover-line"></div>

<p class="lead">1回のセッションで扱う修正は1つだけにします。大きいと感じたら、まず分割案を出してもらいます。</p>

<small class="cover-small">例: READMEに前提条件を1文足す、文言を1か所だけ直す、確認手順を整理する。</small>

</div>

---

<div class="center">

# 計画を確認する

<div class="cover-line"></div>

<p class="lead">実装前に、触る予定のファイル、確認方法、リスクを見ます。違和感があればここで止めます。</p>

<small class="cover-small">触るファイルが多すぎるときは、題材を小さくします。</small>

</div>

---

# 実装を依頼する

<div class="mock">
<span class="muted">依頼例</span><br />
方針は問題なさそうです。<br />
対象をこの1ファイルに絞って修正してください。<br />
修正後に、差分と確認方法を説明してください。
</div>

<div class="note">実装範囲を絞って伝えます。修正後に何を説明してほしいかも、先に伝えます。</div>

---

# 差分を見る

<div class="grid">
<div class="card"><strong>目的に合っているか</strong><span>最初に頼んだ修正になっているか。</span></div>
<div class="card"><strong>余計な変更がないか</strong><span>関係ないファイルや大きな書き換えがないか。</span></div>
<div class="card"><strong>過剰ではないか</strong><span>小さな修正なのに仕組みを増やしすぎていないか。</span></div>
<div class="card"><strong>既存の文体に合うか</strong><span>コードやドキュメントの雰囲気に合っているか。</span></div>
</div>

<div class="warning">AIの説明だけで安心せず、実際の差分を見ます。</div>

---

# テストと動作確認

Claude Codeには、確認方法も整理してもらいます。

<div class="mock">
<span class="muted">確認依頼例</span><br />
今回の変更で実行すべきテストや<br />
動作確認を整理してください。<br />
確認できていないリスクも挙げてください。
</div>

<div class="note">テストがない場合も、リンク確認、表示確認、手順確認など、できる確認を整理します。</div>

---

# リスクをもう一度聞く

<div class="mock">
<span class="muted">確認依頼例</span><br />
この変更について、見落としやリスク、<br />
反対意見があれば挙げてください。<br />
存在しない仕様やファイルを前提にしていないかも<br />
確認してください。
</div>

<div class="next-card">
<strong>AIを賛成係にしない</strong>
<span>最後に、確認役としてもう一度使います。</span>
</div>

---

# よくあるつまずき

<div class="grid">
<div class="card"><strong>依頼が大きすぎる</strong><span>まず分割案を出してもらい、1つだけ選ぶ。</span></div>
<div class="card"><strong>余計な改善が始まる</strong><span>今回やらないことを明示して止める。</span></div>
<div class="card"><strong>差分を見ていない</strong><span>説明ではなく、変更された行を見る。</span></div>
<div class="card"><strong>確認範囲が曖昧</strong><span>何を確認したら完了かを言葉にする。</span></div>
</div>

---

# 持ち帰り用プロンプト

<div class="mock">
このリポジトリで、[修正したいこと] をしたいです。<br />
まず変更は行わず、以下を整理してください。<br />
1. 実装方針<br />
2. 触る予定のファイル<br />
3. 影響範囲<br />
4. テストや動作確認の方法<br />
5. リスク、不明点、今回やらない方がよいこと
</div>

---

# 次にやること

<div class="agenda">
<div class="agenda-item"><div class="agenda-no">01</div><div><div class="agenda-title">小さな候補を1つ選ぶ</div><div class="agenda-detail">文言修正、README追記、確認手順の整理などから始めます。</div></div></div>
<div class="agenda-item"><div class="agenda-no">02</div><div><div class="agenda-title">変更前に計画を出してもらう</div><div class="agenda-detail">いきなり実装せず、触るファイルと確認方法を見ます。</div></div></div>
<div class="agenda-item"><div class="agenda-no">03</div><div><div class="agenda-title">差分を見てから採用する</div><div class="agenda-detail">AIの説明、実際の差分、確認結果を合わせて判断します。</div></div></div>
</div>

---

# 次回予告

<div class="next-card">
<strong>第3回: チームの運用にする</strong>
<span>相談先、レビュー、承認、つまずき共有の流れを整理し、個人の試行錯誤をチームの知見にしていきます。</span>
</div>

<div class="note">今日の宿題は、小さな修正候補を1つ選び、変更前の計画確認まで試してみることです。</div>

---

<div class="center">

# まとめ

<div class="cover-line"></div>

<p class="lead">小さな修正でも、計画、差分、確認方法を見る。AIの作業を採用するかは、人間が決めます。</p>

<small class="cover-small">不安や違和感は、作業を止める理由として十分です。</small>

</div>
