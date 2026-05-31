# 第3回 チームの運用にする

このディレクトリは、Claude Codeの使い方を個人の試行からチーム運用へ広げる第3回セッションの資料をまとめる場所です。

第2回では、影響範囲の小さい修正を題材に、変更前の計画確認、差分確認、テストや動作確認まで扱いました。第3回では、その流れをチームで安全に続けるための相談先、レビュー、承認、つまずき共有の仕組みを扱います。

## この回で扱うこと

- Claude Code利用時の相談先を決める
- AIが作った変更のレビュー観点をそろえる
- 承認が必要な作業と、個人で試してよい作業を分ける
- つまずき、ヒヤリハット、便利だった依頼文を共有する
- チーム用の依頼文、FAQ、運用メモを育てる

## 扱わないこと

- 実プロジェクト全体への一斉導入
- 組織全体の正式ルール策定
- 本番環境や本番DBへの操作
- force pushや履歴を書き換える操作

## 参加者に事前にお願いすること

- 第2回以降に試した小さな依頼や、試せなかった理由を1つ持ってくる
- 便利だった依頼文、不安だった提案、差分確認で迷った点をメモしておく
- チームで相談したいことがあれば、具体例を1つ用意しておく

## ファイル一覧

- [01 スライド構成案](./01-slides-outline-team-workflow.md): スライド構成と話すポイントの原本
- [02 Marpスライド](./02-slides-team-workflow.marp.md): 投影用のMarpスライド
- [第3回 YouTube版 Marpスライド](./02-slides-team-workflow-youtube.marp.md)
- [03 説明会台本](./03-explanation-script-team-workflow.md): 登壇者が話す内容の下書き
- [04 メンバー向けメモ](./04-member-start-note.md): 参加者に共有する事前・事後メモ

## 本番で使うもの

説明会本番では、主に次の3つを使います。

- `02-slides-team-workflow.marp.md`: MarpでHTMLやPDFに出力し、画面共有で投影する
- `03-explanation-script-team-workflow.md`: 登壇者が手元で見ながら話す
- `04-member-start-note.md`: 説明会の事前、最後、または事後に参加者へ共有する

## 作成・編集用のもの

- `01-slides-outline-team-workflow.md`: スライドや台本を作るための設計メモ。スライド構成と話すポイントの原本

## 編集方針

- `01-slides-outline-team-workflow.md` をスライド構成と話すポイントの原本とする
- `02-slides-team-workflow.marp.md` は投影用のMarpスライドとする
- スライドの構成や文言を変える場合は、先に `01-slides-outline-team-workflow.md` を更新し、その内容を `02-slides-team-workflow.marp.md` に反映する
- `02-slides-team-workflow.marp.md` だけを直接直した場合も、あとで `01-slides-outline-team-workflow.md` に同じ意図を反映する
- 記事化や作業ログが必要になった場合は、別途 `article/` を作成する
