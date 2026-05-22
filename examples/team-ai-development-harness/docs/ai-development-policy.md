# AI開発利用ポリシー

このドキュメントは、チームでAI開発支援ツールを使うための入口です。

## まず読むもの

初めて使う人:

- [AI Development Harnessの考え方](./harness-concept.md)
- [Claude Code初回セットアップガイド](./start-guide.md)
- [最初の実践課題](./first-exercise.md)

全員が読むもの:

- [共通ポリシー](../policies/common.md)
- [承認が必要な操作](./approval-required-operations.md)
- [ツール使い分けガイド](./tool-selection-guide.md)

担当領域に応じて読むもの:

- [フロントエンド向け](../policies/frontend.md)
- [バックエンド向け](../policies/backend.md)
- [Windowsアプリ向け](../policies/windows-app.md)
- [インフラ・DevOps向け](../policies/devops.md)
- [QA・テスト向け](../policies/qa.md)

作業前後に使うもの:

- [AI作業前チェックリスト](../checklists/before-ai-work.md)
- [コミット前チェックリスト](../checklists/before-commit.md)
- [PR前チェックリスト](../checklists/before-pr.md)
- [よくある失敗例](./common-pitfalls.md)
- [事故・ヒヤリハット共有テンプレート](../templates/incident-report.md)

展開・運用する人が読むもの:

- [展開ロードマップ](./rollout-plan.md)
- [リポジトリ導入手順](./repository-adoption-guide.md)
- [FAQ](./faq.md)

## 基本方針

- AIは開発者の補助として使う。
- AIの出力をそのまま正解として扱わない。
- 生成されたコード、設定、ドキュメントは必ず人間が確認する。
- 機密情報、個人情報、顧客情報、認証情報をAIに入力しない。
- 影響範囲が大きい変更は、AIに任せる前に人間が方針を決める。
- AIを使った変更でも、通常のレビュー、テスト、承認フローを省略しない。
