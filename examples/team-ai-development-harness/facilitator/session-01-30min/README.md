# 第1回 30分説明会 資料

このディレクトリは、Claude Codeをチームで安全に使い始めるための第1回説明会資料をまとめたものです。

第1回では、Claude Codeにいきなり実装を任せるのではなく、サンプルプロジェクトを使って「安全に起動し、ルールと権限を確認し、コード修正をせずにプロジェクトを解析してもらう」ところまでを扱います。

## この資料の位置づけ

第0回でそろえたAIツールの見方を、Claude Codeの初回利用につなげるための資料です。

参加者向けには「まずはプロジェクトを解析してもらう」入口として説明し、運営側では第2回以降の小さな修正依頼、チーム運用、実プロジェクト展開につなげる前提資料として扱います。

## ファイル一覧

- [01 スライド構成案](./01-slides-outline-30min.md): スライド構成と話すポイントの原本
- [02 Marpスライド](./02-slides-30min.marp.md): 投影用のMarpスライド
- [03 説明会台本](./03-explanation-script-30min.md): 登壇者が話す内容の下書き
- [04 メンバー向けはじめ方メモ](./04-member-start-note.md): 参加者に共有する初回利用メモ
- [公開記事ドラフト](./article/qiita-zenn-claude-code-session-01-30min.md)
- [作業セッションログ](./article/2026-05-23-session-01-30min-facilitator-materials.md)

## 本番で使うもの

説明会本番では、主に次の3つを使います。

- `02-slides-30min.marp.md`: MarpでHTMLやPDFに出力し、画面共有で投影する
- `03-explanation-script-30min.md`: 登壇者が手元で見ながら話す
- `04-member-start-note.md`: 説明会の最後、または事前・事後に参加者へ共有する

## 作成・編集用のもの

- `01-slides-outline-30min.md`: スライドや台本を作るための設計メモ。スライド構成と話すポイントの原本

`01-slides-outline-30min.md` は、本番で投影したり参加者に配ったりする資料ではありません。内容を直すときに、スライド全体の流れや話すポイントを確認するために使います。

## 編集方針

- `01-slides-outline-30min.md` をスライド構成と話すポイントの原本とする
- `02-slides-30min.marp.md` は投影用のMarpスライドとする
- スライドの構成や文言を変える場合は、先に `01-slides-outline-30min.md` を更新し、その内容を `02-slides-30min.marp.md` に反映する
- `02-slides-30min.marp.md` だけを直接直した場合も、あとで `01-slides-outline-30min.md` に同じ意図を反映する
