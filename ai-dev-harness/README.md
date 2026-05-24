# AI開発支援ドキュメント

このフォルダには、チームメンバーがAI開発支援ツールを安全に、効果的に使い始めるためのドキュメントをまとめています。

このフォルダは、AI開発支援の考え方、利用ルール、セットアップ、FAQを読むための独立した資料セットです。実プロジェクトへコピーするテンプレートとは分けて管理します。

HTMLで資料を説明するときは、[インデックス](./index.md) を入口にします。

全体構成を確認したい場合は、[構成ガイド](./STRUCTURE.md) を参照してください。

## 対象者

- Claude CodeやGitHub Copilotを開発作業に使う人
- AIに調査、実装、レビュー、テストを依頼する開発者
- チームの開発ルールに沿ってAI支援ツールを使いたい人

## ゴール

- プロジェクトルートで安全にAI支援ツールを起動する
- 差分、テスト、レビューを前提にAIの出力を扱う
- 危険操作、情報管理、承認が必要な操作を理解する

## 扱わないこと

- AIそのものの一般的な入門説明
- 非エンジニア向けの業務活用例
- 実プロジェクトへコピーするテンプレート本体

## 1. 基礎・ルール編

まずは、考え方とルールの全体像を把握し、ツールを準備します。

- [基礎・ルール編インデックス](./foundation/README.md)
- [AI開発支援の考え方](./foundation/harness-concept.md)
- [AI開発利用ポリシー](./foundation/ai-development-policy.md)
- [ツールの使い分けガイド](./foundation/tool-selection-guide.md)
- [事前準備: VS CodeでClaude Codeを使う](./foundation/vscode-claude-code-guide.md)
- [Claude Code初回セットアップガイド](./foundation/start-guide.md)

## 2. 実践・運用ルール

セットアップが終わったら、最初の練習をして運用ルールを確認します。

- [最初の実践課題](./foundation/first-exercise.md)
- [承認が必要な操作](./foundation/approval-required-operations.md)
- [Claude Code強機能の扱い方](./foundation/claude-code-advanced-feature-policy.md)
- [リポジトリ導入手順](./foundation/repository-adoption-guide.md)

## 3. 実用編

机上の説明を終えたあと、実際のチーム開発でどう使うかを扱います。

- [実用編インデックス](./practical/README.md)
- [最初の1週間の進め方](./practical/01_first-week-operation.md)
- [依頼文の基本パターン](./practical/02_prompt-patterns.md)
- [小さな修正ワークフロー](./practical/03_small-change-workflow.md)
- [レビューとテスト確認](./practical/04_review-and-test.md)
- [困ったときの止め方](./practical/05_trouble-stop-guide.md)

## 4. リファレンス

使っていて分からないこと、上手くいかないことがあった場合に参照します。

- [リファレンスインデックス](./reference/README.md)
- [よくある失敗例と対策](./reference/common-pitfalls.md)
- [よくある質問](./reference/faq.md)
- [用語集](./reference/glossary.md)

## 5. ツール別ガイド

開発作業で使う代表的なAI支援ツールの使い方です。

- [ツール別ガイドインデックス](./tools/README.md)
- [GitHub Copilot CLIの使い方](./tools/11_github-copilot-cli.md)
- [GitHub CopilotをVS Codeで使う](./tools/12_github-copilot-vscode.md)
- [Claude Code CLIの使い方](./tools/13_claude-code-cli.md)
- [Claude CodeをVS Codeで使う](./tools/14_claude-code-vscode.md)
- [Claude Codeの代表的な拡張機能](./tools/15_claude-code-advanced.md)
- [Claude Codeを仕事で使うための安全設定サンプル](./tools/16_claude-code-business-rules.md)

## HTML

`html/` はMarkdown原本から生成した閲覧・共有用HTMLです。原本はこのフォルダ直下のMarkdownです。

## 画像

`assets/` には、ドキュメント内で使う画像や図を置いています。
