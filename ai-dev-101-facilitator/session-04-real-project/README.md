# 第4回 実プロジェクトへ広げる

このディレクトリは、Claude Codeの利用を実プロジェクトへ広げる第4回セッションの資料をまとめる場所です。

第3回では、相談先、レビュー、承認、つまずき共有のチーム運用を扱いました。第4回では、その運用を実プロジェクトごとのルール、依頼文、FAQ、導入チェックに落とし込みます。

## この回で扱うこと

- 実プロジェクトに入る前の確認項目を整理する
- プロジェクト固有のルールや禁止事項を明文化する
- Claude Code向けのプロジェクト説明、依頼文、FAQを作る
- 最初に試す小さなユースケースを選ぶ
- 運用を継続的に改善する流れを決める

## 扱わないこと

- 全プロジェクトへの一斉導入
- 本番環境や本番DBへの直接操作
- 既存の開発プロセスを一度に置き換えること
- force pushや履歴を書き換える操作

## 参加者に事前にお願いすること

- 自分のプロジェクトの実行方法、テスト方法、レビュー方法を確認しておく
- Claude Codeに触らせたくない範囲や、相談が必要な範囲を考えておく
- 最初に試せそうな小さなユースケースを1つ考えておく

## ファイル一覧

- [01 スライド構成案](./01-slides-outline-real-project.md): スライド構成と話すポイントの原本
- [02 Marpスライド](./02-slides-real-project.marp.md): 投影用のMarpスライド
- [第4回 YouTube版 Marpスライド](./02-slides-real-project-youtube.marp.md)
- [03 説明会台本](./03-explanation-script-real-project.md): 登壇者が話す内容の下書き
- [04 メンバー向けメモ](./04-member-start-note.md): 参加者に共有する事前・事後メモ

## 本番で使うもの

説明会本番では、主に次の3つを使います。

- `02-slides-real-project.marp.md`: MarpでHTMLやPDFに出力し、画面共有で投影する
- `03-explanation-script-real-project.md`: 登壇者が手元で見ながら話す
- `04-member-start-note.md`: 説明会の事前、最後、または事後に参加者へ共有する

## 作成・編集用のもの

- `01-slides-outline-real-project.md`: スライドや台本を作るための設計メモ。スライド構成と話すポイントの原本

## 編集方針

- `01-slides-outline-real-project.md` をスライド構成と話すポイントの原本とする
- `02-slides-real-project.marp.md` は投影用のMarpスライドとする
- スライドの構成や文言を変える場合は、先に `01-slides-outline-real-project.md` を更新し、その内容を `02-slides-real-project.marp.md` に反映する
- `02-slides-real-project.marp.md` だけを直接直した場合も、あとで `01-slides-outline-real-project.md` に同じ意図を反映する
- 記事化や作業ログが必要になった場合は、別途 `article/` を作成する
