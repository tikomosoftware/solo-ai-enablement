# Team AI Development Harness

このディレクトリは、チームでAI開発支援ツールを使うための標準テンプレートです。

Claude Code、GitHub Copilot、その他のAIコーディング支援ツールを、個人の使い方ではなくチームの開発プロセスとして扱うための構成です。

## Harnessとは

ここでいうharnessは、AIに作業させる前に、前提、権限、作業手順、確認方法を整えるための仕組みです。

AIに「いい感じに実装して」と依頼するのではなく、次を先に用意します。

- Context: AIに渡す前提
- Guardrails: AIに許可すること、禁止すること
- Workflow: 作業の進め方
- Verification: 人間と自動テストによる確認

## ディレクトリ構成

```text
team-ai-development-harness/
  README.md
  CLAUDE.md
  .claude/
    settings.json
  docs/
    harness-concept.md
    start-guide.md
    ai-development-policy.md
  policies/
    common.md
    frontend.md
    backend.md
    windows-app.md
    devops.md
    qa.md
  workflows/
    ai-assisted-development.md
    code-review.md
    pull-request.md
  checklists/
    before-ai-work.md
    before-commit.md
    before-pr.md
  prompts/
    investigate.md
    implement.md
    review.md
    test-design.md
```

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

