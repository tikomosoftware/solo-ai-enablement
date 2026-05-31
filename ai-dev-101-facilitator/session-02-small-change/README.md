# 第2回 小さな修正を依頼してみる

このディレクトリは、Claude Codeに小さな修正を依頼する第2回セッションの資料をまとめる場所です。

第1回では、コードを変更せずにプロジェクト構成を調査するところまでを扱いました。第2回では、変更前に計画を確認しながら、影響範囲の小さい修正を依頼する流れを扱います。

## この回で扱うこと

- 事前に小さい修正候補を1つ選ぶ
- 変更前にClaude Codeへ実装方針を出してもらう
- 差分を人間が確認する
- テストや動作確認の方法をClaude Codeに整理してもらう
- 問題点、リスク、確認漏れがないか聞く

## 扱わないこと

- 大きなリファクタリング
- 複数機能をまたぐ修正
- 本番環境や本番DBへの操作
- force pushや履歴を書き換える操作

## 参加者に事前にお願いすること

- 自分の担当範囲で、影響が小さい修正候補を1つ考えておく
- 例: 文言修正、READMEの追記、小さなバグの再現確認、テスト追加候補の洗い出し
- 不安な場合は、説明会の担当者やAI推進担当・相談窓口に先に相談する

## ファイル一覧

- [01 スライド構成案](./01-slides-outline-small-change.md): スライド構成と話すポイントの原本
- [02 Marpスライド](./02-slides-small-change.marp.md): 投影用のMarpスライド
- [第2回 YouTube版 Marpスライド](./02-slides-small-change-youtube.marp.md)
- [03 説明会台本](./03-explanation-script-small-change.md): 登壇者が話す内容の下書き
- [04 メンバー向けメモ](./04-member-start-note.md): 参加者に共有する事前・事後メモ

## 本番で使うもの

説明会本番では、主に次の3つを使います。

- `02-slides-small-change.marp.md`: MarpでHTMLやPDFに出力し、画面共有で投影する
- `03-explanation-script-small-change.md`: 登壇者が手元で見ながら話す
- `04-member-start-note.md`: 説明会の事前、最後、または事後に参加者へ共有する

## 作成・編集用のもの

- `01-slides-outline-small-change.md`: スライドや台本を作るための設計メモ。スライド構成と話すポイントの原本

`01-slides-outline-small-change.md` は、本番で投影したり参加者に配ったりする資料ではありません。内容を直すときに、スライド全体の流れや話すポイントを確認するために使います。

## 編集方針

- `01-slides-outline-small-change.md` をスライド構成と話すポイントの原本とする
- `02-slides-small-change.marp.md` は投影用のMarpスライドとする
- スライドの構成や文言を変える場合は、先に `01-slides-outline-small-change.md` を更新し、その内容を `02-slides-small-change.marp.md` に反映する
- `02-slides-small-change.marp.md` だけを直接直した場合も、あとで `01-slides-outline-small-change.md` に同じ意図を反映する
- 記事化や作業ログが必要になった場合は、別途 `article/` を作成する
