# Team AI Development Harness 構成ガイド

## このファイルの目的

このファイルは、`team-ai-development-harness` の全体構成を把握するための地図です。

`README.md` は最初に読む入口、この `STRUCTURE.md` はフォルダとファイルの役割を確認するための資料です。

## 全体構成

```text
team-ai-development-harness/
  README.md
  STRUCTURE.md
  CLAUDE.md
  .claude/
    settings.json
  docs/
  facilitator/
  policies/
  workflows/
  checklists/
  prompts/
  templates/
```

## 役割別の見方

## メンバーが最初に読むもの

```text
docs/ai-development-policy.md
docs/start-guide.md
docs/first-exercise.md
```

役割:

- AI開発利用の入口
- Claude Codeの起動場所
- VS Codeの注意点
- 最初の実践課題

## メンバーが必要に応じて読むもの

```text
docs/faq.md
docs/common-pitfalls.md
docs/tool-selection-guide.md
docs/approval-required-operations.md
policies/
```

役割:

- よくある質問
- よくある失敗例
- CopilotとClaude Codeの使い分け
- 承認が必要な操作
- 共通ルールと職種別ルール

## 展開担当者が読むもの

```text
facilitator/
```

役割:

- 展開計画
- 説明会準備
- 台本
- 事前チェック
- ふりかえり

## AIに読ませるもの

```text
CLAUDE.md
.claude/settings.json
policies/
workflows/
```

役割:

- Claude Codeへの作業ルール
- 権限設定
- 禁止事項
- 作業手順

## 人間が確認に使うもの

```text
checklists/
workflows/
templates/
```

役割:

- AI作業前チェック
- コミット前チェック
- PR前チェック
- 事故・ヒヤリハット共有

## フォルダの説明

## docs/

メンバー向けの説明資料です。

主なファイル:

- `ai-development-policy.md`: AI開発利用ポリシーの入口
- `harness-concept.md`: harnessの考え方
- `start-guide.md`: Claude Code初回セットアップ
- `first-exercise.md`: 最初の実践課題
- `faq.md`: よくある質問
- `common-pitfalls.md`: よくある失敗例
- `tool-selection-guide.md`: ツール使い分け
- `approval-required-operations.md`: 承認が必要な操作
- `repository-adoption-guide.md`: リポジトリ導入手順

## facilitator/

展開担当者向けの資料です。

ここにある資料は、基本的には説明会の参加者全員に読ませるものではありません。説明する人、導入を進める人、チームリーダーが使います。

主なファイル:

- `README.md`: 展開担当者向け入口
- `rollout-plan.md`: 展開ロードマップ
- `session-plan-30min.md`: 30分説明会の構成
- `explanation-script-30min.md`: 30分説明会の台本たたき台
- `adoption-checklist.md`: 展開前チェックリスト

## policies/

守るべきルールです。

主なファイル:

- `common.md`: 全エンジニア共通
- `frontend.md`: フロントエンド向け
- `backend.md`: バックエンド向け
- `windows-app.md`: Windowsアプリ向け
- `devops.md`: インフラ・DevOps向け
- `qa.md`: QA・テスト向け

## workflows/

AIを使う作業の進め方です。

主なファイル:

- `ai-assisted-development.md`: AI支援開発の標準フロー
- `code-review.md`: AI利用時のコードレビュー
- `pull-request.md`: AI利用時のPR運用

## checklists/

作業前後の確認リストです。

主なファイル:

- `before-ai-work.md`: AI作業前
- `before-commit.md`: コミット前
- `before-pr.md`: PR前

## prompts/

AIに依頼するときのプロンプトテンプレートです。

主なファイル:

- `investigate.md`: 調査
- `implement.md`: 実装
- `review.md`: レビュー
- `test-design.md`: テスト設計

## templates/

人間が記入して共有するテンプレートです。

主なファイル:

- `incident-report.md`: 事故・ヒヤリハット共有

## 説明会で使う資料と展開担当者向け資料の違い

説明会で使う資料:

- 参加者に見せる
- 参加者があとで読む
- 初回の理解に必要

例:

```text
docs/harness-concept.md
docs/start-guide.md
policies/common.md
docs/tool-selection-guide.md
docs/first-exercise.md
```

展開担当者向け資料:

- 説明する人が準備に使う
- 導入計画を立てる
- 説明会の流れを作る
- ふりかえりや改善に使う

例:

```text
facilitator/rollout-plan.md
facilitator/session-plan-30min.md
facilitator/explanation-script-30min.md
facilitator/adoption-checklist.md
```

つまり、説明会で使う資料は表に出る資料、展開担当者向け資料は進行側のための資料です。

## 初回説明会で扱う範囲

30分説明会では、すべての資料を扱いません。

扱う資料:

```text
docs/harness-concept.md
docs/start-guide.md
policies/common.md
docs/tool-selection-guide.md
docs/first-exercise.md
```

扱わないが、あとで参照する資料:

```text
docs/faq.md
docs/common-pitfalls.md
docs/approval-required-operations.md
workflows/
checklists/
prompts/
templates/
```

## 最初に育てるべき資料

会社やチームで実際に展開するなら、最初に育てるべき資料は次です。

- `facilitator/explanation-script-30min.md`
- `docs/faq.md`
- `docs/common-pitfalls.md`
- `templates/incident-report.md`
- `policies/common.md`

理由は、説明会と実運用で最初に使う可能性が高いためです。

