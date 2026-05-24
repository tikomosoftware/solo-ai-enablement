# Team AI Development Harness

このディレクトリは、チームでAI開発支援ツールを使うための標準テンプレートです。

Claude Code、GitHub Copilot、その他のAIコーディング支援ツールを、個人の使い方ではなくチームの開発プロセスとして扱うための構成です。

## まず読むもの

利用者向け:

- [AI開発利用ポリシー](./materials/docs/ai-development-policy.md)
- [事前準備: VS CodeでClaude Codeを使う](./materials/docs/vscode-claude-code-guide.md)
- [Claude Code初回セットアップガイド](./materials/docs/start-guide.md)
- [AI開発支援 用語集](./materials/docs/glossary.md)
- [最初の実践課題](./materials/docs/first-exercise.md)

展開担当者向け:

- [展開担当者向け資料](../facilitator/README.md)

全体構成を把握したい場合:

- [構成ガイド](./STRUCTURE.md)

## 使い方

新しいプロジェクトにまず導入する場合は、`minimal/` の中身を対象リポジトリのプロジェクトルートへコピーします。

プロジェクトルートとは、VS Codeで「フォルダーを開く」ときに選ぶ一番上のフォルダです。

例:

```text
my-app/
  .git/
  CLAUDE.md
  .claude/
    settings.json
  src/
  tests/
```

`minimal/` は Claude Code に直接効く最小構成です。`CLAUDE.md` は作業ルール、`.claude/settings.json` は権限設定です。

チームで運用をそろえたい場合は、`materials/` から必要な資料を追加でコピーします。

```text
my-app/
  docs/
  policies/
  workflows/
  checklists/
  prompts/
  templates/
```

`materials/` は、人間が読む導入資料であり、必要に応じてAIエージェントに読ませる文脈資料でもあります。置いてあるだけでClaude Codeが毎回すべて自動で読むわけではないため、重要な資料は `CLAUDE.md` から参照させます。

`materials/policies/common.md` は全プロジェクト共通の入口です。フロントエンド、バックエンド、Windowsアプリ、DevOps、QAなどの領域別ルールは `materials/policies/` に分けて置いているので、対象プロジェクトに関係するものを残して育てます。

`materials/docs/` は制限設定そのものではなく、導入ガイド、FAQ、用語集、最初の練習、承認が必要な操作などをまとめた説明資料です。危険操作を実際に止めるのは `.claude/settings.json`、AIに守らせる入口は `CLAUDE.md` です。

## 補足

説明会で使う資料と、展開担当者向け資料は少し違います。

説明会で使う資料は、参加者に見せたり、説明中に参照したりする資料です。

展開担当者向け資料は、トップレベルの `facilitator/` にあります。説明会の準備、導入計画、進行、ふりかえりに使う裏方資料です。

実プロジェクトに導入する段階では、[プロジェクト導入プロファイル](./materials/templates/project-adoption-profile.md) を使って、対象リポジトリ固有の情報を整理します。
