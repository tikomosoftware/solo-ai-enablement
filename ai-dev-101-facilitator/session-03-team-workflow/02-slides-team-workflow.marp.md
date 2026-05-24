---
marp: true
theme: default
paginate: true
---

<!--
このファイルは投影用のMarpスライドです。
構成や話すポイントの原本は 01-slides-outline-team-workflow.md です。
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
.roadmap-future, .roadmap-past { background: #f1f5f9; border-color: #d8dee9; opacity: 0.78; }
.roadmap-past .agenda-no, .roadmap-past .agenda-title, .roadmap-past .agenda-detail, .roadmap-future .agenda-no, .roadmap-future .agenda-title, .roadmap-future .agenda-detail { color: #64748b; }
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

<div class="kicker">GUIDE</div>

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
<img class="company-logo" src="../session-00-ai-basics/assets/nextworks-ai-logo.png" />
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

<div class="kicker">DEMO</div>

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
