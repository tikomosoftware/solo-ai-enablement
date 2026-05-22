# 承認が必要な操作

## 目的

このドキュメントは、AIに実行させる前に人間の承認が必要な操作をまとめたものです。

## 原則禁止

次の操作は、AIに実行させないことを原則とします。

- `git reset`
- `git clean`
- `git rebase`
- `git checkout -- <file>`
- `git restore`
- `git push --force`
- `git push --force-with-lease`
- ファイル削除
- ディレクトリ削除
- 本番環境へのdeploy
- 本番DBへの変更
- DBのdrop、truncate、reset
- destructive migration
- シークレット、秘密鍵、`.env` の読み書き

## 事前承認が必要

次の操作は、実行前に対象、理由、影響範囲を説明し、人間の承認を得ます。

- ファイル移動
- ファイルリネーム
- 大量置換
- 大量フォーマット
- 依存パッケージ追加
- lockfileの大きな変更
- マイグレーション作成
- CI/CD設定変更
- Dockerfile変更
- インフラ設定変更
- 通常の `git push`
- `git commit`

## 承認時に確認すること

- 対象ファイル、ディレクトリ、ブランチは何か。
- なぜその操作が必要か。
- 失敗した場合に何が壊れるか。
- 元に戻す方法はあるか。
- バックアップやpatchを作れるか。
- 他メンバーの作業に影響しないか。

## AIへの指示例

```text
削除、reset、clean、rebase、force push、本番環境への操作は行わないでください。
必要だと判断した場合は、実行せず、対象、理由、影響範囲だけ説明してください。
```

