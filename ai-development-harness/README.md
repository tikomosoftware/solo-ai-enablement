# Team AI Development Harness

このディレクトリは、チームでAI開発支援ツールを使うための標準テンプレートです。

Claude Code、GitHub Copilot、その他のAIコーディング支援ツールを、個人の使い方ではなくチームの開発プロセスとして扱うための構成です。

## まず読むもの

利用者向け:

- [AI開発利用ポリシー](./docs/ai-development-policy.md)
- [事前準備: VS CodeでClaude Codeを使う](./docs/vscode-claude-code-guide.md)
- [Claude Code初回セットアップガイド](./docs/start-guide.md)
- [AI開発支援 用語集](./docs/glossary.md)
- [最初の実践課題](./docs/first-exercise.md)

展開担当者向け:

- [展開担当者向け資料](../facilitator/README.md)

全体構成を把握したい場合:

- [構成ガイド](./STRUCTURE.md)

## 使い方

新しいプロジェクトに導入する場合は、このディレクトリの中身を対象リポジトリのプロジェクトルートへコピーします。

プロジェクトルートとは、VS Codeで「フォルダーを開く」ときに選ぶ一番上のフォルダです。

例:

```text
my-app/
  .git/
  CLAUDE.md
  .claude/
    settings.json
  docs/
  policies/
  workflows/
  checklists/
  prompts/
  src/
  tests/
```

導入後は、プロジェクトに合わせて内容を調整してください。

## 補足

説明会で使う資料と、展開担当者向け資料は少し違います。

説明会で使う資料は、参加者に見せたり、説明中に参照したりする資料です。

展開担当者向け資料は、トップレベルの `facilitator/` にあります。説明会の準備、導入計画、進行、ふりかえりに使う裏方資料です。

実プロジェクトに導入する段階では、[プロジェクト導入プロファイル](./templates/project-adoption-profile.md) を使って、対象リポジトリ固有の情報を整理します。
