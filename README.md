# Solo AI Enablement

AIをまだ使っていないメンバーに向けて、AI活用の基本、注意点、チームルール、実践例をMarkdownで育てていくためのリポジトリです。

## 運用方針

- `articles/` のMarkdownを原本にする
- `docs/` のHTMLは生成物として扱う
- OneNoteにはHTML表示から貼り付ける
- 将来的に権限が取れたら、Microsoft Graph APIでOneNote更新を自動化する

## ローカルでHTMLを生成する

```bash
npm run build
```

生成先:

```text
docs/
```

## GitHub Actions

`articles/**/*.md` またはHTML生成スクリプトをpushすると、GitHub Actionsが自動でHTMLを再生成し、差分があれば同じブランチへコミットします。

