---
marp: true
theme: default
paginate: true
---

<!--
このファイルは投影用のMarpスライドです。
構成や話すポイントの原本は 01-slides-outline-real-project.md です。
表示内容を変える場合は、原本とMarp版の両方を確認してください。
-->

<style>
section { font-family: "Yu Gothic", "Meiryo", sans-serif; color: #17202a; background: #fbfaf7; padding: 48px 64px; }
h1 { color: #14213d; font-size: 42px; line-height: 1.18; }
h2 { color: #14213d; }
p, li { font-size: 24px; line-height: 1.45; }
small { color: #5f6b7a; }
code { font-family: "Cascadia Mono", Consolas, monospace; }
.lead { font-size: 28px; line-height: 1.5; }
.cover-note { font-size: 22px; line-height: 1.45; color: #334155; margin-top: 22px; }
.cover-date { display: block; font-size: 22px; color: #475569; margin-bottom: 8px; }
.kicker { color: #64748b; font-size: 18px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
.series-label { color: #475569; font-size: 22px; font-weight: 700; margin-top: 6px; }
.center { display: flex; flex-direction: column; justify-content: center; height: 100%; }
.cover-line { width: 680px; height: 4px; background: #2f80ed; border-radius: 999px; margin: 24px 0 18px; }
.cover-small { display: block; margin-top: 30px; }
.guide { display: grid; grid-template-columns: 1fr 300px; gap: 36px; align-items: center; height: 82%; }
.portrait { width: 280px; height: 280px; object-fit: cover; border-radius: 8px; border: 1px solid #d8dee9; }
.portrait-wrap { position: relative; width: 280px; }
.company-logo { width: 64px; height: auto; display: block; position: absolute; right: 0; bottom: 54px; background: #ffffff; padding: 6px; border-radius: 6px; border: 1px solid #e2e8f0; box-shadow: 0 8px 18px rgba(15, 23, 42, 0.16); }
.profile-lead { color: #14213d; font-size: 26px; font-weight: 700; line-height: 1.35; margin: 0 0 12px; }
.profile-personal { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 12px; }
.profile-personal div { background: #ffffff; border: 1px solid #d8dee9; border-radius: 8px; padding: 10px 12px; }
.profile-personal strong { display: block; color: #14213d; font-size: 17px; margin-bottom: 4px; }
.profile-personal span { display: block; color: #475569; font-size: 16px; line-height: 1.35; }
.portrait-comment { display: block; margin-top: 12px; font-size: 18px !important; color: #64748b; text-align: center; width: 100%; }
.agenda { display: grid; gap: 12px; margin-top: 22px; }
.agenda-item { display: grid; grid-template-columns: 34px 1fr; gap: 14px; align-items: start; background: #ffffff; border: 1px solid #d8dee9; border-radius: 8px; padding: 13px 16px; }
.agenda-no { color: #2f80ed; font-size: 20px; font-weight: 700; }
.agenda-title { color: #14213d; font-size: 22px; font-weight: 700; }
.agenda-detail { color: #475569; font-size: 17px; line-height: 1.35; margin-top: 3px; }
.roadmap-current { border-color: #2f80ed; border-left: 6px solid #2f80ed; background: #ffffff; }
.roadmap-past { background: #f1f5f9; border-color: #d8dee9; opacity: 0.78; }
.roadmap-past .agenda-no, .roadmap-past .agenda-title, .roadmap-past .agenda-detail { color: #64748b; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 24px; }
.grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; margin-top: 24px; }
.card { border: 1px solid #d8dee9; background: #ffffff; border-radius: 8px; padding: 20px 22px; }
.card strong { display: block; color: #14213d; font-size: 24px; margin-bottom: 10px; }
.card span { display: block; color: #475569; font-size: 19px; line-height: 1.42; }
.note { background: #eef6ff; border-left: 6px solid #2f80ed; padding: 18px 22px; margin-top: 24px; font-size: 24px; }
.warning { background: #fff7ed; border-left: 6px solid #f97316; padding: 18px 22px; margin-top: 24px; font-size: 24px; }
.mock { background: #111827; color: #e5e7eb; border-radius: 8px; padding: 22px 24px; font-family: "Cascadia Mono", Consolas, monospace; font-size: 22px; line-height: 1.5; margin-top: 24px; }
.mock .muted { color: #9ca3af; }
.next-card { background: #ffffff; border: 1px solid #d8dee9; border-left: 6px solid #2f80ed; border-radius: 8px; padding: 22px 26px; margin-top: 26px; }
.next-card strong { display: block; color: #14213d; font-size: 28px; margin-bottom: 10px; }
.next-card span { display: block; color: #334155; font-size: 24px; line-height: 1.45; }
</style>

<div class="center">

<div class="kicker">CLAUDE CODE INTERNAL SERIES</div>
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

<div class="kicker">GUIDE</div>

# 今日の案内役

<p class="profile-lead">汎用ルールを押し込まず、現場に合わせて安全な入口を作る案内役です。</p>

- 名前: 佐伯 悠人（通称）
- 所属: 株式会社ネクストワークス AI活用支援チーム
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
<img class="company-logo" src="../session-00-ai-basics/assets/nextworks-ai-logo.png" />
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

<div class="kicker">DEMO</div>

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
