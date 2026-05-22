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
    first-exercise.md
    faq.md
    common-pitfalls.md
    tool-selection-guide.md
    approval-required-operations.md
    repository-adoption-guide.md
  facilitator/
    README.md
    rollout-plan.md
    session-plan-30min.md
    explanation-script-30min.md
    adoption-checklist.md
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
  templates/
    incident-report.md
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

## 説明会で扱う範囲

初回説明会では、すべての資料を読む必要はありません。

おすすめの説明範囲:

- `docs/harness-concept.md` の概要
- `docs/start-guide.md` の起動場所とVS Code注意点
- `policies/common.md` の禁止事項
- `docs/tool-selection-guide.md` の使い分け
- `docs/first-exercise.md` の最初の課題

残りの資料は、必要になったときに参照する運用にします。

説明する人は、`facilitator/` の資料を使って準備します。
