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

<div class="series-label">Claude Code社内活用シリーズ 第4回</div>

# 実プロジェクトへ広げる

<div class="cover-line"></div>

<p class="lead"><span class="cover-date">30〜45分説明会</span>プロジェクトごとのルール、依頼文、FAQを作る</p>

<p class="cover-note">～小さく始めて、現場に合う運用へ育てます。～</p>

<small class="cover-small">いきなり全体導入ではなく、最初の安全な入口を作ります。</small>

</div>

---

<div class="guide">
<div>

# 今日の案内役

<p class="profile-lead">汎用ルールを押し込まず、現場に合わせて安全な入口を作る案内役です。</p>

- 名前: 佐伯 悠人（通称）
- 所属: (株) NEURAMNESIA AI活用支援チーム
- 今日の立ち位置: 実プロジェクト導入の整理役
- 困ったときの相談先: 弊社担当までお気軽にご相談ください

<div class="profile-personal">
<div><strong>今日作るもの</strong><span>導入チェック、ルール、FAQ</span></div>
<div><strong>今日選ぶもの</strong><span>最初の小さなユースケース</span></div>
<div><strong>合言葉</strong><span>一気に広げず、入口を作る</span></div>
</div>

</div>

<div class="portrait-wrap">
<img class="portrait" src="../session-00-ai-basics/assets/facilitator-placeholder.png" />
<small class="portrait-comment">現場ごとの違いを大事にします</small>
</div>
</div>

---

# Claude Code社内活用シリーズ

<div class="note">第1回から第4回まで、Claude Codeをチームで安全に使い始める流れを共有してきました。今日は最終回「実プロジェクトへ広げる」です。</div>

<div class="agenda">
<div class="agenda-item roadmap-past"><div class="agenda-no">01</div><div><div class="agenda-title">第1回: 安全な使い始め方</div><div class="agenda-detail">起動場所、ルール確認、権限確認、プロジェクト解析を扱いました。</div></div></div>
<div class="agenda-item roadmap-past"><div class="agenda-no">02</div><div><div class="agenda-title">第2回: 小さな修正を依頼する</div><div class="agenda-detail">変更前の計画、差分、確認方法を見る流れを扱いました。</div></div></div>
<div class="agenda-item roadmap-past"><div class="agenda-no">03</div><div><div class="agenda-title">第3回: チームの運用にする</div><div class="agenda-detail">相談先、レビュー、承認、つまずき共有を整理しました。</div></div></div>
<div class="agenda-item roadmap-current"><div class="agenda-no">04</div><div><div class="agenda-title">第4回: 実プロジェクトへ広げる</div><div class="agenda-detail">プロジェクトごとのルールや依頼文、FAQを育てていきます。</div></div></div>
</div>

---

# 本日の流れ

<div class="agenda">
<div class="agenda-item"><div class="agenda-no">01</div><div><div class="agenda-title">導入前に確認すること</div><div class="agenda-detail">実行方法、テスト方法、触ってよい範囲、相談先を整理します。</div></div></div>
<div class="agenda-item"><div class="agenda-no">02</div><div><div class="agenda-title">プロジェクト固有ルールを作る</div><div class="agenda-detail">任せてよい作業、相談が必要な作業、禁止操作を明文化します。</div></div></div>
<div class="agenda-item"><div class="agenda-no">03</div><div><div class="agenda-title">依頼文とFAQを用意する</div><div class="agenda-detail">初回依頼文、よくある質問、作業ログの型を作ります。</div></div></div>
<div class="agenda-item"><div class="agenda-no">04</div><div><div class="agenda-title">最初のユースケースを選ぶ</div><div class="agenda-detail">実プロジェクトでも確認しやすい小さな題材から始めます。</div></div></div>
<div class="agenda-item"><div class="agenda-no">05</div><div><div class="agenda-title">継続改善の流れを決める</div><div class="agenda-detail">つまずきをFAQやルールに反映するサイクルを作ります。</div></div></div>
</div>

---

# この回のゴール

<div class="grid">
<div class="card"><strong>導入チェック</strong><span>プロジェクトに入る前の確認項目を整理できる。</span></div>
<div class="card"><strong>プロジェクトルール</strong><span>触ってよい範囲、相談が必要な範囲、禁止操作を書ける。</span></div>
<div class="card"><strong>最初の題材</strong><span>安全に試せる小さなユースケースを選べる。</span></div>
<div class="card"><strong>改善サイクル</strong><span>FAQや依頼文を更新する流れを決められる。</span></div>
</div>

---

# 実プロジェクトで増える難しさ

<div class="grid">
<div class="card"><strong>構成が固有</strong><span>起動方法、テスト方法、依存関係がプロジェクトごとに違う。</span></div>
<div class="card"><strong>触れない領域がある</strong><span>秘密情報、本番設定、データ移行、認証まわりなど。</span></div>
<div class="card"><strong>既存フローがある</strong><span>レビュー、承認、リリース、障害対応の流れがある。</span></div>
<div class="card"><strong>影響が重い</strong><span>本番影響、顧客影響、データの扱いを考える必要がある。</span></div>
</div>

---

# 導入前チェック

<div class="grid-3">
<div class="card"><strong>実行方法</strong><span>ローカルでどう動かすか。</span></div>
<div class="card"><strong>テスト方法</strong><span>どのテストをどう実行するか。</span></div>
<div class="card"><strong>秘密情報</strong><span>見せない情報、貼らない情報。</span></div>
<div class="card"><strong>触ってよい範囲</strong><span>最初に扱うフォルダや機能。</span></div>
<div class="card"><strong>相談先</strong><span>技術、セキュリティ、本番影響。</span></div>
<div class="card"><strong>レビュー方法</strong><span>誰が何を見るか。</span></div>
</div>

---

# プロジェクト固有ルール

<div class="mock">
目的:<br />
Claude Codeに任せてよい作業:<br />
事前相談が必要な作業:<br />
禁止操作:<br />
テストや確認方法:<br />
相談先:<br />
作業ログの残し方:
</div>

<div class="note">最初は1ページで十分です。実際のつまずきから更新します。</div>

---

# 最初のユースケースを選ぶ

<div class="grid">
<div class="card"><strong>向いている題材</strong><span>README補足、開発手順整理、テスト追加候補、小さな文言修正、既存コードの説明。</span></div>
<div class="card"><strong>避ける題材</strong><span>認証、権限、決済、DB移行、本番データ操作、大きな仕様変更、広いリファクタリング。</span></div>
</div>

<div class="warning">実プロジェクトでも、最初は「確認しやすい」題材から始めます。</div>

---

# 実プロジェクト用の依頼文

<div class="mock">
このプロジェクトで [やりたいこと] を試したいです。<br />
まず変更は行わず、構成、関連ファイル、<br />
影響範囲、確認方法、リスクを整理してください。<br />
触ってよい範囲は [範囲] です。<br />
禁止操作は [禁止操作] です。
</div>

---

# FAQの初版

<div class="grid">
<div class="card"><strong>起動とテスト</strong><span>実行方法、テスト方法、よく使うコマンド。</span></div>
<div class="card"><strong>触る範囲</strong><span>よく触るフォルダ、触ってはいけないフォルダ。</span></div>
<div class="card"><strong>よくある失敗</strong><span>環境、依存関係、テスト、権限でつまずく点。</span></div>
<div class="card"><strong>相談先</strong><span>迷ったときに聞く相手、レビューを依頼する相手。</span></div>
</div>

---

# 作業ログを残す

<div class="mock">
何を頼んだか:<br />
何を変更したか:<br />
何を確認したか:<br />
未確認のリスク:<br />
次に見る人へのメモ:
</div>

<div class="note">ログは長文でなくて大丈夫です。次に見る人が判断できる材料を残します。</div>

---

# レビューに出す前の確認

<div class="grid">
<div class="card"><strong>差分を見たか</strong><span>AIの説明だけでなく、変更された行を確認したか。</span></div>
<div class="card"><strong>確認したか</strong><span>テスト、表示確認、手順確認などを実施したか。</span></div>
<div class="card"><strong>リスクを書いたか</strong><span>未確認のこと、迷っていることを隠していないか。</span></div>
<div class="card"><strong>ルールに合うか</strong><span>プロジェクト固有ルールから外れていないか。</span></div>
</div>

---

# 導入後の改善サイクル

<div class="agenda">
<div class="agenda-item"><div class="agenda-no">01</div><div><div class="agenda-title">つまずきを見る</div><div class="agenda-detail">週1回、困ったことや止めたことを短く確認します。</div></div></div>
<div class="agenda-item"><div class="agenda-no">02</div><div><div class="agenda-title">FAQに追加する</div><div class="agenda-detail">同じ迷いを次の人が避けられるようにします。</div></div></div>
<div class="agenda-item"><div class="agenda-no">03</div><div><div class="agenda-title">依頼文を直す</div><div class="agenda-detail">実際に使いやすい表現へ少しずつ更新します。</div></div></div>
<div class="agenda-item"><div class="agenda-no">04</div><div><div class="agenda-title">ルールを更新する</div><div class="agenda-detail">禁止操作や相談ラインを現場に合わせて見直します。</div></div></div>
</div>

---

<div class="center">

# 導入メモの初版を作る

<div class="cover-line"></div>

<p class="lead">対象プロジェクトを1つ選び、導入チェック、プロジェクトルール、最初のユースケース、FAQ初版、作業ログを作ります。</p>

<small class="cover-small">完成版ではなく、最初に試すための入口です。</small>

</div>

---

# 持ち帰り用テンプレート

<div class="mock">
導入チェック:<br />
プロジェクトルール:<br />
最初のユースケース:<br />
初回依頼文:<br />
FAQ初版:<br />
作業ログテンプレート:<br />
1週間後に見直すこと:
</div>

---

# 4回シリーズのまとめ

<div class="agenda">
<div class="agenda-item"><div class="agenda-no">01</div><div><div class="agenda-title">調査から始める</div><div class="agenda-detail">変更せずにプロジェクトを理解する。</div></div></div>
<div class="agenda-item"><div class="agenda-no">02</div><div><div class="agenda-title">小さく修正する</div><div class="agenda-detail">計画、差分、確認方法を見る。</div></div></div>
<div class="agenda-item"><div class="agenda-no">03</div><div><div class="agenda-title">チーム運用にする</div><div class="agenda-detail">相談先、レビュー、共有ログを作る。</div></div></div>
<div class="agenda-item"><div class="agenda-no">04</div><div><div class="agenda-title">実プロジェクトへ広げる</div><div class="agenda-detail">現場ごとのルールとFAQを育てる。</div></div></div>
</div>

---

# 次にやること

<div class="agenda">
<div class="agenda-item"><div class="agenda-no">01</div><div><div class="agenda-title">対象プロジェクトを1つ選ぶ</div><div class="agenda-detail">全体展開ではなく、まず1つの現場で試します。</div></div></div>
<div class="agenda-item"><div class="agenda-no">02</div><div><div class="agenda-title">導入チェックを埋める</div><div class="agenda-detail">実行方法、テスト方法、触ってよい範囲を確認します。</div></div></div>
<div class="agenda-item"><div class="agenda-no">03</div><div><div class="agenda-title">小さな題材を1つ試す</div><div class="agenda-detail">README補足や調査依頼など、確認しやすいものから始めます。</div></div></div>
<div class="agenda-item"><div class="agenda-no">04</div><div><div class="agenda-title">1週間後に見直す</div><div class="agenda-detail">FAQ、依頼文、相談ラインを実例から直します。</div></div></div>
</div>

---

<div class="center">

# まとめ

<div class="cover-line"></div>

<p class="lead">実プロジェクト導入は、一気に広げません。小さく始めて、ルールとFAQを現場に合わせて育てます。</p>

<small class="cover-small">AIに任せる範囲ではなく、人間が判断できる形を広げます。</small>

</div>
