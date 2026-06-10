# AI Project Template

資料基準日: 2026-06-10

このフォルダは、実プロジェクトへAI開発支援の運用ルールを導入するためのテンプレートです。

チームでClaude CodeなどのAI開発支援ツールを使うときに、プロジェクトルートへコピーして使う最小構成と、必要に応じて追加する運用資料をまとめています。このフォルダは独立したテンプレート資料として扱い、別フォルダの資料へのリンクには依存しません。

テンプレートは固定の正解ではありません。導入時点の社内ルール、利用ツール、権限設計、セキュリティ要件に合わせて見直してください。

## 対象者

- 実プロジェクトにAI開発支援のルールを導入する人
- `CLAUDE.md` や `.claude/settings.json` を整備する人
- チームのAI利用ルールをプロジェクトに合わせて調整する人

## ゴール

- 最小構成を対象リポジトリへコピーする
- プロジェクト固有のルール、禁止操作、確認手順を追加する
- チームで運用しながらテンプレートを育てる

## 扱わないこと

- AI初心者向けの一般的な説明
- 説明会の進行資料
- そのまま全プロジェクトに無修正で使える完成品として固定すること

## まず使うもの

最小構成:

```text
minimal/
  CLAUDE.md
  .claude/
    settings.json
```

新しいプロジェクトにまず導入する場合は、`minimal/` の中身を対象リポジトリのプロジェクトルートへコピーします。

コピー後の例:

```text
my-app/
  .git/
  CLAUDE.md
  .claude/
    settings.json
  src/
  tests/
```

`CLAUDE.md` はClaude Codeへの入口指示です。`.claude/settings.json` は権限設定です。この2つだけでも、作業ルールと危険操作の制御を始められます。

## 必要に応じて追加するもの

```text
materials/
  checklists/
  policies/
  prompts/
  templates/
  workflows/
```

チームで運用をそろえたい場合は、`materials/` から必要なフォルダを `.claude/` の下へ追加コピーします。

コピー後の例:

```text
my-app/
  CLAUDE.md
  .claude/
    settings.json
    checklists/
    policies/
    prompts/
    templates/
    workflows/
  src/
  tests/
```

追加した資料は、置いてあるだけで毎回すべて自動で読まれるわけではありません。AIに守らせたい資料は、コピー後の `CLAUDE.md` から参照させます。

## 各フォルダの役割

- `minimal/`: まずコピーする最小構成
- `materials/policies/`: チームや領域ごとの利用ルール
- `materials/workflows/`: 実装、レビュー、PRなどの作業手順
- `materials/checklists/`: 作業前後の確認リスト
- `materials/prompts/`: AIへ依頼するときのプロンプト例
- `materials/templates/`: 事故共有や導入情報整理のテンプレート

## プロジェクト固有のガイダンス

AIに守らせたい内容には、チーム共通のルールと、プロジェクト固有のルールがあります。

特にセキュリティ観点は、プロジェクトによって重点が変わります。たとえば、マルチテナントSaaS、管理画面、認証API、個人情報を扱う画面では、AIに毎回確認してほしい観点を `materials/templates/repository-security-guidance.md` から作成し、対象リポジトリの `.claude/policies/` などへ配置します。

個人の相談スタイルやレビュー姿勢をAIに伝えたい場合は、`materials/templates/personal-collaboration-guidance.md` をたたき台として使います。ただし、個人の好みとチームの必須ルールが衝突する場合は、チームルールを優先します。

## 構成ガイド

テンプレート全体の詳しい構成は、[構成ガイド](./STRUCTURE.md) にまとめています。
