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

<div class="series-label">Claude Code社内活用シリーズ 第3回</div>

# チームの運用にする

<div class="cover-line"></div>

<p class="lead"><span class="cover-date">30〜40分説明会</span>個人の試行錯誤を、チームの知見に変える</p>

<p class="cover-note">～相談先、レビュー、承認、つまずき共有の流れを決めます。～</p>

<small class="cover-small">AI活用を個人芸にせず、安心して続けられる形にします。</small>

</div>

---

<div class="guide">
<div>

# 今日の案内役

<p class="profile-lead">AIに詳しい人だけが抱え込まず、相談しやすい運用を作る案内役です。</p>

- 名前: 佐伯 悠人（通称）
- 所属: (株) NEURAMNESIA AI活用支援チーム
- 今日の立ち位置: チームで安全に使い続けるための整理役
- 困ったときの相談先: 弊社担当までお気軽にご相談ください

<div class="profile-personal">
<div><strong>今日決めるもの</strong><span>相談先、レビュー、承認ライン</span></div>
<div><strong>今日育てるもの</strong><span>依頼文、FAQ、共有ログ</span></div>
<div><strong>合言葉</strong><span>止まれる運用を先に作る</span></div>
</div>

</div>

<div class="portrait-wrap">
<img class="portrait" src="../session-00-ai-basics/assets/facilitator-placeholder.png" />
<small class="portrait-comment">つまずきは運用の材料です</small>
</div>
</div>

---

# Claude Code社内活用シリーズ

<div class="note">第1回から第4回まで、Claude Codeをチームで安全に使い始める流れを共有します。今日は第3回「チームの運用にする」を扱います。</div>

<div class="agenda">
<div class="agenda-item roadmap-past"><div class="agenda-no">01</div><div><div class="agenda-title">第1回: 安全な使い始め方</div><div class="agenda-detail">起動場所、ルール確認、権限確認、プロジェクト解析を扱いました。</div></div></div>
<div class="agenda-item roadmap-past"><div class="agenda-no">02</div><div><div class="agenda-title">第2回: 小さな修正を依頼する</div><div class="agenda-detail">変更前の計画、差分、確認方法を見る流れを扱いました。</div></div></div>
<div class="agenda-item roadmap-current"><div class="agenda-no">03</div><div><div class="agenda-title">第3回: チームの運用にする</div><div class="agenda-detail">相談先、レビュー、承認、つまずき共有の流れを整理します。</div></div></div>
<div class="agenda-item roadmap-future"><div class="agenda-no">04</div><div><div class="agenda-title">第4回: 実プロジェクトへ広げる</div><div class="agenda-detail">プロジェクトごとのルールや依頼文、FAQを育てていきます。</div></div></div>
</div>

---

# 本日の流れ

<div class="agenda">
<div class="agenda-item"><div class="agenda-no">01</div><div><div class="agenda-title">第2回のふりかえり</div><div class="agenda-detail">小さく頼み、計画、差分、確認方法を見る型を確認します。</div></div></div>
<div class="agenda-item"><div class="agenda-no">02</div><div><div class="agenda-title">チームで決めること</div><div class="agenda-detail">相談先、レビュー観点、承認ライン、共有ログを決めます。</div></div></div>
<div class="agenda-item"><div class="agenda-no">03</div><div><div class="agenda-title">レビューと承認の分け方</div><div class="agenda-detail">個人で試せる範囲と、相談してから進める範囲を分けます。</div></div></div>
<div class="agenda-item"><div class="agenda-no">04</div><div><div class="agenda-title">つまずき共有の仕組み</div><div class="agenda-detail">ヒヤリハットや便利な依頼文をチームの知見にします。</div></div></div>
<div class="agenda-item"><div class="agenda-no">05</div><div><div class="agenda-title">運用メモを育てる</div><div class="agenda-detail">まず1週間試せる軽い運用メモを作ります。</div></div></div>
</div>

---

# この回のゴール

<div class="grid">
<div class="card"><strong>相談先が分かる</strong><span>迷ったときに誰へ聞くかを決めます。</span></div>
<div class="card"><strong>レビュー観点がそろう</strong><span>AIの変更を見るポイントを共通化します。</span></div>
<div class="card"><strong>承認ラインが分かる</strong><span>個人で試す範囲と、相談が必要な範囲を分けます。</span></div>
<div class="card"><strong>共有するものが分かる</strong><span>つまずき、ヒヤリハット、便利な依頼文を残します。</span></div>
</div>

---

# 第2回のふりかえり

<div class="grid-3">
<div class="card"><strong>小さく頼む</strong><span>1回の目的を1つに絞る。</span></div>
<div class="card"><strong>計画を見る</strong><span>変更前に方針と影響範囲を見る。</span></div>
<div class="card"><strong>差分を見る</strong><span>説明だけでなく変更行を見る。</span></div>
<div class="card"><strong>確認方法を見る</strong><span>テストや動作確認を整理する。</span></div>
<div class="card"><strong>リスクを聞く</strong><span>見落としや反対意見も出してもらう。</span></div>
<div class="card"><strong>人間が決める</strong><span>採用、修正、保留を判断する。</span></div>
</div>

<div class="note">今日は、この型をチームで続けるための運用を作ります。</div>

---

# 個人利用で起きやすい問題

<div class="grid">
<div class="card"><strong>頼み方がばらばら</strong><span>人によってAIの動きが大きく変わる。</span></div>
<div class="card"><strong>危ない提案を見逃す</strong><span>削除、履歴操作、本番操作に気づきにくい。</span></div>
<div class="card"><strong>つまずきが残らない</strong><span>同じ不安や失敗を別の人が繰り返す。</span></div>
<div class="card"><strong>レビュー観点が違う</strong><span>何を見ればよいかが人によって変わる。</span></div>
</div>

---

# チームで決める4点

<div class="grid">
<div class="card"><strong>相談先</strong><span>迷ったとき、危なそうなときに聞く相手。</span></div>
<div class="card"><strong>レビュー観点</strong><span>AIの差分を見るときの共通チェック。</span></div>
<div class="card"><strong>承認ライン</strong><span>個人で進めてよい範囲と、相談が必要な範囲。</span></div>
<div class="card"><strong>共有ログ</strong><span>便利だった依頼文、つまずき、ヒヤリハット。</span></div>
</div>

<div class="note">最初から完璧な規程にせず、まずは軽い運用メモから始めます。</div>

---

# 相談先を決める

<div class="agenda">
<div class="agenda-item"><div class="agenda-no">01</div><div><div class="agenda-title">まず聞く相手</div><div class="agenda-detail">日常的な使い方、依頼文、差分確認で迷ったとき。</div></div></div>
<div class="agenda-item"><div class="agenda-no">02</div><div><div class="agenda-title">技術的に見る相手</div><div class="agenda-detail">設計、テスト、影響範囲の判断が必要なとき。</div></div></div>
<div class="agenda-item"><div class="agenda-no">03</div><div><div class="agenda-title">リスクを見る相手</div><div class="agenda-detail">権限、セキュリティ、本番影響、データ操作に関わるとき。</div></div></div>
</div>

---

# レビュー観点をそろえる

<div class="grid">
<div class="card"><strong>目的</strong><span>依頼した目的に合っているか。</span></div>
<div class="card"><strong>余計な変更</strong><span>関係ないファイルや大きな書き換えがないか。</span></div>
<div class="card"><strong>既存ルール</strong><span>文体、命名、設計、チームルールに合っているか。</span></div>
<div class="card"><strong>確認方法</strong><span>テストや動作確認が妥当か。</span></div>
</div>

<div class="warning">AIの説明と差分の両方を見ます。分からない変更は、そのまま通しません。</div>

---

# 承認が必要な作業を分ける

<div class="grid">
<div class="card"><strong>個人で試しやすい</strong><span>調査、計画整理、README補足、文言修正、テスト追加候補の洗い出し。</span></div>
<div class="card"><strong>相談してから進める</strong><span>複数ファイルの変更、仕様変更、設計変更、認証、権限、DB、削除、履歴操作。</span></div>
</div>

<div class="note">境界に迷ったら、進める前に相談します。迷う作業は、相談対象です。</div>

---

# つまずき共有の型

<div class="mock">
<span class="muted">共有ログ例</span><br />
何を頼んだか: READMEの手順補足<br />
AIの提案: 3ファイル変更を提案<br />
迷った点: 範囲が広すぎるかもしれない<br />
判断: 今回は1ファイルだけに絞った<br />
次回メモ: 先に対象ファイルを指定する
</div>

---

# ヒヤリハットを責めない

<div class="next-card">
<strong>危ない提案を止められたことに価値がある</strong>
<span>削除、履歴操作、本番操作、秘密情報などに気づいたら、個人の失敗ではなくチームの学びとして共有します。</span>
</div>

<div class="warning">共有の目的は犯人探しではありません。同じ不安を次の人が避けられるようにすることです。</div>

---

# チーム用プロンプト集を作る

<div class="grid-3">
<div class="card"><strong>調査依頼</strong><span>変更せずに構成や影響を調べる。</span></div>
<div class="card"><strong>計画確認</strong><span>実装前に方針と確認方法を見る。</span></div>
<div class="card"><strong>差分説明</strong><span>変更意図を説明してもらう。</span></div>
<div class="card"><strong>レビュー観点</strong><span>問題点や反対意見を出す。</span></div>
<div class="card"><strong>リスク確認</strong><span>見落とし、不明点、前提の誤りを見る。</span></div>
<div class="card"><strong>作業ログ</strong><span>何をしたか、次に何を見るかを残す。</span></div>
</div>

---

# FAQを育てる

<div class="grid">
<div class="card"><strong>よくある質問</strong><span>最初に何を聞けばよいか、差分をどう見るか。</span></div>
<div class="card"><strong>危ない提案</strong><span>削除、履歴操作、秘密情報、本番操作の例。</span></div>
<div class="card"><strong>判断の境界線</strong><span>どこからレビューや承認が必要か。</span></div>
<div class="card"><strong>プロジェクト固有の注意</strong><span>実行方法、テスト方法、触ってよい範囲。</span></div>
</div>

---

<div class="center">

# 運用メモの初版を作る

<div class="cover-line"></div>

<p class="lead">相談先、個人で試してよい範囲、レビュー必須の範囲、共有ログのテンプレートを1枚にまとめます。</p>

<small class="cover-small">まずは1週間だけ試せる軽さで作ります。</small>

</div>

---

# 持ち帰り用テンプレート

<div class="mock">
相談先:<br />
個人で試してよい範囲:<br />
レビュー必須の範囲:<br />
共有するログ:<br />
危ない操作の例:<br />
まず使う依頼文:
</div>

---

# 次にやること

<div class="agenda">
<div class="agenda-item"><div class="agenda-no">01</div><div><div class="agenda-title">相談先を決める</div><div class="agenda-detail">迷ったときに止まれる相手を明確にします。</div></div></div>
<div class="agenda-item"><div class="agenda-no">02</div><div><div class="agenda-title">レビュー必須ラインを決める</div><div class="agenda-detail">どこから個人判断で進めないかを決めます。</div></div></div>
<div class="agenda-item"><div class="agenda-no">03</div><div><div class="agenda-title">1週間だけ試す</div><div class="agenda-detail">運用メモを使い、つまずきを1つ共有します。</div></div></div>
</div>

---

# 次回予告

<div class="next-card">
<strong>第4回: 実プロジェクトへ広げる</strong>
<span>プロジェクトごとのルール、依頼文、FAQを作り、実際の開発現場で使える状態にしていきます。</span>
</div>

---

<div class="center">

# まとめ

<div class="cover-line"></div>

<p class="lead">運用は、完璧なルールではなく「止まれる仕組み」から始めます。つまずきも共有すれば、チームの知見になります。</p>

<small class="cover-small">AI活用は個人芸ではなく、チームで育てるものです。</small>

</div>
