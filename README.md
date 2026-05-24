# Solo AI Enablement

AIをまだ使っていないメンバーに向けて、AI活用の基本、注意点、チームルール、実践例をMarkdownで育てていくためのリポジトリです。

## 運用方針

- `articles/` のMarkdownを原本にする
- `docs/` のHTMLは生成物として扱う
- OneNoteにはHTML表示から貼り付ける
- 将来的に権限が取れたら、Microsoft Graph APIでOneNote更新を自動化する

## 主要フォルダー

- `articles/`: AI活用の基本、注意点、チームルール、実践例の記事原本
- `ai-development-harness/`: チーム開発でAI支援を使うためのharness構成テンプレート
- `facilitator/`: AI Development Harnessをチームに展開するための説明会・研修資料
- `publication-materials/`: Qiita/Zennなど外部公開向けに整えた原稿
- `examples/claude-code-safe-config/`: Claude Codeを業務で安全に使うための最小構成サンプル

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
