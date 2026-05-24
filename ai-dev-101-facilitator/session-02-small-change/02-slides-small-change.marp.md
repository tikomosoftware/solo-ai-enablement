---
marp: true
theme: default
paginate: true
---

<!--
このファイルは投影用のMarpスライドです。
構成や話すポイントの原本は 01-slides-outline-small-change.md です。
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
.roadmap-future,
.roadmap-past {
  background: #f1f5f9;
  border-color: #d8dee9;
  opacity: 0.78;
}
.roadmap-past .agenda-no,
.roadmap-past .agenda-title,
.roadmap-past .agenda-detail,
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

<div class="kicker">GUIDE</div>

# 今日の案内役

<p class="profile-lead">AIに作業を丸投げせず、人間が確認できる形に整える案内役です。</p>

- 名前: 佐伯 悠人（通称）
- 所属: 株式会社ネクストワークス AI活用支援チーム
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
<img class="company-logo" src="../session-00-ai-basics/assets/nextworks-ai-logo.png" />
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

<div class="kicker">DEMO 01</div>

# 題材を選ぶ

<div class="cover-line"></div>

<p class="lead">1回のセッションで扱う修正は1つだけにします。大きいと感じたら、まず分割案を出してもらいます。</p>

<small class="cover-small">例: READMEに前提条件を1文足す、文言を1か所だけ直す、確認手順を整理する。</small>

</div>

---

<div class="center">

<div class="kicker">DEMO 02</div>

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
