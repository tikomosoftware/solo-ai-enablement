# AI開発利用ポリシー サンプル

## このファイルの位置づけ

このファイルは、AI開発支援ツールを業務で使うためのポリシー集の入口です。

全員が読むべき共通ルールと、担当領域ごとの補足ルールを分けています。運用時は、まず共通ポリシーを採用し、必要な職種別ポリシーだけを追加してください。

## 最初に置く場所

このサンプルは、対象リポジトリのプロジェクトルートに置く想定です。

プロジェクトルートとは、VS Codeで「フォルダーを開く」ときに選ぶ一番上のフォルダです。CLIで使う場合も、このフォルダに移動してからClaude Codeを起動します。

配置例:

```text
my-app/
  .git/
  .claude/
    settings.json
  docs/
    ai-development-policy.md
    policies/
      common.md
      frontend.md
      backend.md
      windows-app.md
      devops.md
      qa.md
  src/
  tests/
  README.md
  CLAUDE.md
```

VS Codeで使う場合:

```text
1. VS Codeで my-app/ を開く
2. 統合ターミナルを開く
3. claude を実行する
```

CLIだけで使う場合:

```text
cd C:\ProjectsDEV\my-app
claude
```

避ける起動場所:

```text
C:\
C:\Users\your-name
C:\ProjectsDEV
```

Claude Codeは、起動したフォルダを中心に作業します。広いフォルダで起動すると、関係ないファイルや別プロジェクトまで作業対象に見えてしまう可能性があります。

## 使い方

基本セット:

- [共通ポリシー](./policies/common.md)

担当領域に応じて追加:

- [フロントエンド向け](./policies/frontend.md)
- [バックエンド向け](./policies/backend.md)
- [Windowsアプリ向け](./policies/windows-app.md)
- [インフラ・DevOps向け](./policies/devops.md)
- [QA・テスト向け](./policies/qa.md)

たとえば、フロントエンドエンジニア向けに配る場合は、次の2つを読めば十分です。

```text
common.md
frontend.md
```

バックエンドエンジニア向けなら、次の2つです。

```text
common.md
backend.md
```

複数領域を担当する人は、該当する補足ポリシーを追加で読みます。

## 対象ツール

このポリシー集は、次のようなAI開発支援ツールを想定しています。

- Claude Code
- GitHub Copilot
- GitHub Copilot CLI
- その他のAIコーディング支援ツール

## 運用方針

このサンプルをそのまま社内ルールにする必要はありません。

最初はこの構成をベースにして、実際の開発体制、扱うデータ、リポジトリ権限、リリースフローに合わせて編集してください。
