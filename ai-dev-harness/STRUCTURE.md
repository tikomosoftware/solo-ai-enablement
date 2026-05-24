# AI Dev Harness 構成ガイド

## このファイルの目的

このファイルは、`ai-dev-harness/` のドキュメント構成を把握するための地図です。

このフォルダは、AI開発支援ツールをチームで安全に使うための考え方、セットアップ、運用ルール、FAQをまとめた読み物です。実プロジェクトへコピーするテンプレートとは分けて管理します。

## 全体構成

```text
ai-dev-harness/
  README.md
  index.md
  STRUCTURE.md
  foundation/
    README.md
    harness-concept.md
    ai-development-policy.md
    tool-selection-guide.md
    vscode-claude-code-guide.md
    start-guide.md
    first-exercise.md
    approval-required-operations.md
    claude-code-advanced-feature-policy.md
    repository-adoption-guide.md
  practical/
    README.md
    01_first-week-operation.md
    02_prompt-patterns.md
    03_small-change-workflow.md
    04_review-and-test.md
    05_trouble-stop-guide.md
  reference/
    README.md
    common-pitfalls.md
    faq.md
    glossary.md
  tools/
    README.md
    11_github-copilot-cli.md
    12_github-copilot-vscode.md
    13_claude-code-cli.md
    14_claude-code-vscode.md
    15_claude-code-advanced.md
    16_claude-code-business-rules.md
  assets/
  html/
  scripts/
```

## 読む順番

初めて使う人は、次の順番で読むと全体像をつかみやすくなります。

1. `foundation/harness-concept.md`
2. `foundation/ai-development-policy.md`
3. `foundation/tool-selection-guide.md`
4. `foundation/vscode-claude-code-guide.md`
5. `foundation/start-guide.md`
6. `foundation/first-exercise.md`

机上の説明から実運用へ進む場合は、次に `practical/README.md` から実用編を読みます。

困ったときや運用を固めるときは、`reference/README.md` からFAQ、用語集、失敗例を参照します。

ツール別の具体的な使い方が必要になったら、`tools/README.md` からGitHub CopilotやClaude Codeのガイドを参照します。

## 基礎・ルール編

### index.md

HTMLで資料を説明するときの入口です。

説明会や共有会では、まずこのファイルから全体の流れを示します。

### foundation/README.md

基礎・ルール編の入口です。

考え方、安全ルール、セットアップ、承認が必要な操作をまとめます。

### foundation/harness-concept.md

AI開発支援をチームで使うための考え方を説明します。

「AIに任せる」のではなく、人間が方針を決め、AIに小さく依頼し、結果を確認するための枠組みとして整理しています。

### foundation/ai-development-policy.md

チームでAI開発支援ツールを使うときの入口になるポリシーです。

読むべき資料、基本方針、AIに任せてよいこと、確認が必要なことをまとめます。

### foundation/tool-selection-guide.md

GitHub Copilot、Claude Code、AIチャットなどをどう使い分けるかを説明します。

ツールごとの得意・不得意を整理し、用途に応じた選び方を示します。

### foundation/vscode-claude-code-guide.md

VS Code上でClaude Codeを使うための準備資料です。

拡張機能の使い方、プロジェクトフォルダの開き方、差分確認の流れなどを扱います。

### foundation/start-guide.md

Claude Codeを初めて使う人向けのセットアップガイドです。

インストール、認証、起動場所、最初に確認することをまとめます。

### foundation/first-exercise.md

最初の実践課題です。

いきなりコードを書かせるのではなく、起動場所、ルール読み込み、変更なしの調査などを確認します。

### foundation/repository-adoption-guide.md

既存リポジトリへAI開発支援の運用を導入するときの手順です。

対象リポジトリの選び方、最初に確認すること、チームレビューの観点をまとめます。

### foundation/approval-required-operations.md

AI単独で進めてはいけない操作をまとめた資料です。

削除、履歴操作、本番環境操作、データベース操作など、事前承認が必要な操作を明確にします。

### foundation/claude-code-advanced-feature-policy.md

Claude Codeの強力な機能を、使ってよい、要相談、原則使わないに分類する資料です。

初回説明会で深く扱わない機能や、チームで相談してから使う機能の境界を明確にします。

## 実用編

### practical/README.md

机上の説明を終えたあと、実際のチーム開発でどう使うかを説明する入口です。

調査、小さな修正、レビュー、テスト確認、困ったときの止め方をまとめます。

### practical/01_first-week-operation.md

セットアップ後の最初の1週間で、調査から小さな修正までを段階的に試す流れです。

### practical/02_prompt-patterns.md

調査、方針作成、小さな修正、差分説明、レビュー、テスト確認などで使う依頼文の型です。

### practical/03_small-change-workflow.md

影響範囲の小さい変更をAIに依頼し、人間が差分と確認結果を見るための手順です。

### practical/04_review-and-test.md

AIにレビュー観点やテスト観点の洗い出しを手伝わせるための流れです。

### practical/05_trouble-stop-guide.md

変更が大きくなった、危険操作が出た、差分が読めないといった場面で作業を止めるためのガイドです。

## リファレンス

### reference/README.md

リファレンスの入口です。

FAQ、用語集、失敗例をまとめます。

### reference/faq.md

チームメンバーから出やすい質問と回答をまとめます。

使い始めの不安、権限、情報管理、レビュー、失敗時の対応などを扱います。

### reference/common-pitfalls.md

よくある失敗例と対策です。

起動場所の間違い、影響範囲の見落とし、差分確認不足、ルール未読などを扱います。

### reference/glossary.md

AI開発支援で使う用語集です。

プロンプト、コンテキスト、ハルシネーション、エージェント、差分確認など、説明会や運用で使う言葉を揃えます。

## ツール別ガイド

### tools/README.md

ツール別ガイドの入口です。

GitHub Copilot、Claude CodeのCLI、VS Code連携、拡張機能、安全設定サンプルをまとめます。

### tools/11_github-copilot-cli.md

GitHub Copilot CLIの使い方を説明します。

ターミナルでの相談、コマンド提案、出力確認など、CLIで使うときの基本を扱います。

### tools/12_github-copilot-vscode.md

GitHub CopilotをVS Codeで使うための資料です。

エディタ内での補完、チャット、コード説明、修正依頼などを扱います。

### tools/13_claude-code-cli.md

Claude Code CLIの使い方を説明します。

プロジェクトルートでの起動、調査依頼、実装依頼、差分確認の流れを扱います。

### tools/14_claude-code-vscode.md

Claude CodeをVS Codeで使うための資料です。

VS Code上でのパネル操作、変更確認、プレビュー確認などを扱います。

### tools/15_claude-code-advanced.md

Claude Codeの代表的な拡張機能を紹介します。

高度な機能は、チームルールと安全確認が整ってから段階的に扱います。

### tools/16_claude-code-business-rules.md

Claude Codeを仕事で使うための安全設定サンプルです。

権限設定、禁止操作、情報管理、チームでの利用ルールを扱います。

## assets/

ドキュメントで使う画像や図を置きます。

現在は、VS CodeでClaude Codeを使う手順を説明するための画像を置いています。

## html/

Markdownから生成した閲覧・共有用HTMLです。

原本はこのフォルダ直下のMarkdownです。HTMLは生成物として扱います。

## scripts/

HTML生成用のスクリプトを置きます。

`build-html.js` は、このフォルダ直下のMarkdownを読み取り、`html/` にHTMLを生成します。

## このフォルダで扱わないもの

このフォルダは読み物としてのドキュメントを扱います。

実プロジェクトへコピーする `CLAUDE.md`、`.claude/settings.json`、ポリシー、チェックリスト、プロンプト、テンプレート類は、このフォルダでは管理しません。
